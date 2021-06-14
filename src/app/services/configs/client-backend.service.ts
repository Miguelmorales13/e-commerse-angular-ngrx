import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpResponse} from "../../models/http-response";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/app.reducer";

@Injectable({
  providedIn: 'root'
})
export class ClientBackendService {
  token: string = ''

  constructor(private http: HttpClient, private store: Store<IAppState>) {
    this.store.select("auth").subscribe(authState => {
      this.token = authState.token
    })
  }

  get(context: string) {
    return this.http.get(`${environment.urlClient}${context}`, {
      headers: {
        "Authorization": `Bearer ${this.token}`
      }
    }).pipe(
      map((resp: HttpResponse) => resp.data ?? resp)
    )
  }

  post<T>(context: string, body: T) {
    return this.http.post(`${environment.urlClient}${context}`, body).pipe(
      map((resp: HttpResponse) => resp.data ?? resp)
    )
  }

  patch<T>(context: string, body: T) {
    return this.http.patch(`${environment.urlClient}${context}`, body).pipe(
      map((resp: HttpResponse) => resp.data ?? resp)
    )
  }

  delete(context: string) {
    return this.http.get(`${environment.urlClient}${context}`).pipe(
      map((resp: HttpResponse) => resp.data ?? resp)
    )
  }
}
