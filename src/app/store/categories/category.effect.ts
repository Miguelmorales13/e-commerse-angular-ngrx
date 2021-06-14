import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CategoryActions, CategoryActionsTypes} from "./category.actions";
import {concatMap, mergeMap, tap} from "rxjs/operators";
import {CategoryService} from "../../services/http/category.service";

@Injectable()
export class CategoryEffect {
  constructor(
    private $actions: Actions,
    private categoryService: CategoryService,
  ) {
  }

  getAll$ = createEffect(
    () => this.$actions.pipe(
      ofType(CategoryActions[CategoryActionsTypes.GetAll]),
      tap((data) => {
        console.log('data ', data)
      }),
      mergeMap(
        () => this.categoryService.getAll()
          .pipe(
            concatMap(async (data) => CategoryActions[CategoryActionsTypes.SetList]({value: data}))
          )
      )
    )
  )

}
