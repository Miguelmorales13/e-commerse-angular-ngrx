import {IUser} from "../../models/user";

export interface IAuthState{
  token:string
  loading:boolean
  user:IUser
}
export const authState:IAuthState={
  token:'',
  loading:false,
  user:{}
}
