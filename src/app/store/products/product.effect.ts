import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductActions, ProductActionsTypes} from "./product.actions";
import {concatMap, mergeMap, tap} from "rxjs/operators";
import {ProductService} from "../../services/http/product.service";

@Injectable()
export class ProductEffect {
  constructor(
    private $actions: Actions,
    private productService: ProductService,
  ) {
  }

  getAll$ = createEffect(
    () => this.$actions.pipe(
      ofType(ProductActions[ProductActionsTypes.GetAll]),
      tap((data) => {
        console.log('data ', data)
      }),
      mergeMap(
        () => this.productService.getAll()
          .pipe(
            concatMap(async (data) => ProductActions[ProductActionsTypes.SetList]({value: data}))
          )
      )
    )
  )

}
