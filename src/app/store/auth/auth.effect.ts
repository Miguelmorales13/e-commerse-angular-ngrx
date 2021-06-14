import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthActions, AuthActionsTypes} from "./auth.actions";
import {mergeMap, tap} from "rxjs/operators";
import {AuthService} from "../../services/http/auth.service";

@Injectable()
export class AuthEffect {
  constructor(
    private $actions: Actions,
    private authService: AuthService,
  ) {
  }

  signIn$ = createEffect(
    () => this.$actions.pipe(
      ofType(AuthActions[AuthActionsTypes.SignIn]),
      tap(data => {
        console.log('data ', data)
      }),
      mergeMap(
        (action) => this.authService.signIn(action.value)
          .pipe(
            mergeMap(data => [
              AuthActions[AuthActionsTypes.SetToken]({value: data.token}),
              AuthActions[AuthActionsTypes.SetUser]({value: data.user})
            ])
          )
      )
    )
  )
  signOut$ = createEffect(
    () => this.$actions.pipe(
      ofType(AuthActions[AuthActionsTypes.SignOut]),
      mergeMap(() => [
        AuthActions[AuthActionsTypes.SetToken]({value: ''}),
        AuthActions[AuthActionsTypes.SetUser]({value: {}})
      ])
    )
  )
}
