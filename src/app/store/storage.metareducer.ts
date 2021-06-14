import {Action, ActionReducer, MetaReducer} from '@ngrx/store';
import {merge, pick} from 'lodash-es';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string): any {
  return JSON.parse(<string>localStorage.getItem(localStorageKey));
}

// the keys from state which we'd like to save.
const stateKeys = ['auth.token'];
// the key for the local storage.
const localStorageKey = '__app_storage__';

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  let onInit = true; // after load/refresh…
  return function (state: S, action: A): S {
    // reduce the nextState.
    const nextState = reducer(state, action);
    // init the application state.
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
    // save the next state to the application storage.
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug, storageMetaReducer];
