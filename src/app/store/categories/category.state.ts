import {ICategory} from "../../models/category";

export interface ICategoryState {
  loading: boolean
  categories: ICategory[]
  selectedCategory: ICategory
}

export const categoryState: ICategoryState = {
  loading: false,
  categories: [],
  selectedCategory: {}
}
