import {Injectable} from '@angular/core';
import {ClientBackendService} from "../configs/client-backend.service";
import {SignIn} from "../../models/sign-in";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: ClientBackendService) {
  }

  signIn(signIn: SignIn) {
    return this.http.post('auth/sign-in', signIn)
  }
}
