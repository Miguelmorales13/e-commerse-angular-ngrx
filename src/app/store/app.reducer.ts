import {IAuthState} from "./auth/auth.state";
import {ActionReducerMap} from "@ngrx/store";
import {AuthReducer} from "./auth/auth.reducer";
import {ICategoryState} from "./categories/category.state";
import {CategoryReducer} from "./categories/category.reducer";
import {IProductState} from "./products/product.state";
import {ProductReducer} from "./products/product.reducer";


export interface IAppState {
  auth: IAuthState
  category: ICategoryState
  product: IProductState
}

export const AppReducers: ActionReducerMap<IAppState> = {
  auth: AuthReducer,
  category: CategoryReducer,
  product: ProductReducer
}
