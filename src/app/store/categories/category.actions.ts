import {createAction, props} from "@ngrx/store";
import {ICategory} from "../../models/category";

const nameActions = `[Category Store]`

export enum CategoryActionsTypes {
  SetList = "SetList",
  Set = "Set",
  SetLoading = "SetLoading",
  GetAll = "GetAll",
}


export const CategoryActions = {
  [CategoryActionsTypes.SetLoading]: createAction(`${nameActions} ${CategoryActionsTypes.SetLoading}`, props<{ value: boolean }>()),
  [CategoryActionsTypes.Set]: createAction(`${nameActions} ${CategoryActionsTypes.Set}`, props<{ value: ICategory }>()),
  [CategoryActionsTypes.SetList]: createAction(`${nameActions} ${CategoryActionsTypes.SetList}`, props<{ value: ICategory[] }>()),
  [CategoryActionsTypes.GetAll]: createAction(`${nameActions} ${CategoryActionsTypes.GetAll}`),
}
