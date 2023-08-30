import { Injectable } from '@angular/core';
import {PaginatedResponse} from "../interfaces/paginated-response";
import {Category} from "../interfaces/category";
import {HttpApiService} from "../core/services/http-api.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url = `${environment.ApiBaseUrl}/categories`
  constructor(private httpApi: HttpApiService) {}

  getCategories() {
    return this.httpApi.get<PaginatedResponse<Category>>(this.url)
  }
}
