import {Action, createReducer, on} from "@ngrx/store";
import {ProductActions, ProductActionsTypes} from "./product.actions";
import {IProductState, productState,} from "./product.state";


const _productReducer = createReducer(productState,
  on(ProductActions[ProductActionsTypes.SetLoading], (state, {value}) => ({...state, loading: value})),
  on(ProductActions[ProductActionsTypes.Set], (state, {value}) => ({...state, selectedProduct: value})),
  on(ProductActions[ProductActionsTypes.SetList], (state, {value}) => ({...state, categories: value})),
)
export const ProductReducer = (state: IProductState = productState, action: Action) => {
  return _productReducer(state, action)
}
