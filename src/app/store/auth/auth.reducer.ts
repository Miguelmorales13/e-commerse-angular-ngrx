import {Action, createReducer, on} from "@ngrx/store";
import { AuthActions, AuthActionsTypes} from "./auth.actions";
import {IUser} from "../../models/user";
import {authState, IAuthState} from "./auth.state";



const _authReducer = createReducer(authState,
  on(AuthActions[AuthActionsTypes.SetLoading],(state, {value })=>({...state, loading:value})),
  on(AuthActions[AuthActionsTypes.SetUser],(state, {value })=>({...state, user:value})),
  on(AuthActions[AuthActionsTypes.SetToken],(state, {value })=>({...state, token:value})),
)
export const AuthReducer = (state:IAuthState=authState, action:Action)=>{
 return _authReducer(state,action)
}
