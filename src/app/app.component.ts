import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "./store/app.reducer";
import {ICategory} from "./models/category";
import {CategoryActions, CategoryActionsTypes} from "./store/categories/category.actions";

@Component({
  selector: 'e-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wanted: string = ''
  categories: ICategory[] = []

  constructor(private store: Store<IAppState>) {
    store.select("category").subscribe((categoryState => {
      this.categories = categoryState.categories
    }))
    this.store.dispatch(CategoryActions[CategoryActionsTypes.GetAll]())
  }

}
