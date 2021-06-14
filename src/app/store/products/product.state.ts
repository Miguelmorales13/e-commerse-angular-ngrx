import {IProduct} from "../../models/product";

export interface IProductState {
  loading: boolean
  selectedProduct: IProduct,
  products: IProduct[]
}

export const productState: IProductState = {
  loading: false,
  selectedProduct: {},
  products: []
}
