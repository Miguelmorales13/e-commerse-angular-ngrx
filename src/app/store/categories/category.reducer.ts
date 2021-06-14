import {Action, createReducer, on} from "@ngrx/store";
import {CategoryActions, CategoryActionsTypes} from "./category.actions";
import {categoryState, ICategoryState,} from "./category.state";


const _categoryReducer = createReducer(categoryState,
  on(CategoryActions[CategoryActionsTypes.SetLoading], (state, {value}) => ({...state, loading: value})),
  on(CategoryActions[CategoryActionsTypes.Set], (state, {value}) => ({...state, selectedCategory: value})),
  on(CategoryActions[CategoryActionsTypes.SetList], (state, {value}) => ({...state, categories: value})),
)
export const CategoryReducer = (state: ICategoryState = categoryState, action: Action) => {
  return _categoryReducer(state, action)
}
