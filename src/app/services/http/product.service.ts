import {Injectable} from '@angular/core';
import {ClientBackendService} from "../configs/client-backend.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: ClientBackendService) {
  }

  getAll() {
    return this.http.get('products')
  }
}
