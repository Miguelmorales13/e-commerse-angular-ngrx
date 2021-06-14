import {createAction, props} from "@ngrx/store";
import {IUser} from "../../models/user";
import {SignIn} from "../../models/sign-in";

const nameActions = `[Auth Store]`

export enum AuthActionsTypes {
  SetToken = "SetToken",
  SetUser = "SetUser",
  SetLoading = "SetLoading",
  SignIn = "SignIn",
  SignOut = "SignOut",
}


export const AuthActions = {
  [AuthActionsTypes.SetLoading]: createAction(`${nameActions} ${AuthActionsTypes.SetLoading}`, props<{ value: boolean }>()),
  [AuthActionsTypes.SetToken]: createAction(`${nameActions} ${AuthActionsTypes.SetToken}`, props<{ value: string }>()),
  [AuthActionsTypes.SetUser]: createAction(`${nameActions} ${AuthActionsTypes.SetUser}`, props<{ value: IUser }>()),
  [AuthActionsTypes.SignIn]: createAction(`${nameActions} ${AuthActionsTypes.SignIn}`, props<{ value: SignIn }>()),
  [AuthActionsTypes.SignOut]: createAction(`${nameActions} ${AuthActionsTypes.SignOut}`),
}
