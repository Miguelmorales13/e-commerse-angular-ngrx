import {Component, OnInit} from '@angular/core';
import {IAppState} from "../../store/app.reducer";
import {Store} from "@ngrx/store";
import {ICategory} from "../../models/category";
import {CategoryActions, CategoryActionsTypes} from "../../store/categories/category.actions";

@Component({
  selector: 'e-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wanted: string = ''
  categories: ICategory[] = []

  constructor(private store: Store<IAppState>) {
    store.select("category").subscribe((categoryState => {
      this.categories = categoryState.categories
    }))
    this.store.dispatch(CategoryActions[CategoryActionsTypes.GetAll]())
  }

  ngOnInit(): void {
  }

}
