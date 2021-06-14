import {createAction, props} from "@ngrx/store";
import {IProduct} from "../../models/product";

const nameActions = `[Product Store]`

export enum ProductActionsTypes {
  SetList = "SetList",
  Set = "Set",
  SetLoading = "SetLoading",
  GetAll = "GetAll",
}


export const ProductActions = {
  [ProductActionsTypes.SetLoading]: createAction(`${nameActions} ${ProductActionsTypes.SetLoading}`, props<{ value: boolean }>()),
  [ProductActionsTypes.Set]: createAction(`${nameActions} ${ProductActionsTypes.Set}`, props<{ value: IProduct }>()),
  [ProductActionsTypes.SetList]: createAction(`${nameActions} ${ProductActionsTypes.SetList}`, props<{ value: IProduct[] }>()),
  [ProductActionsTypes.GetAll]: createAction(`${nameActions} ${ProductActionsTypes.GetAll}`),
}
