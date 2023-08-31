import { Injectable } from '@angular/core';
import {HttpApiService} from "../core/services/http-api.service";
import {environment} from "../../environments/environment";
import {PaginatedResponse} from "../interfaces/paginated-response";
import {HttpGetParams} from "../interfaces/http-get-params";
import {ProductStatus} from "../interfaces/product-status";
import {Product} from "../products-table/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = environment.ApiBaseUrl
  constructor(private httpApi: HttpApiService) { }

  getStatuses(params?: HttpGetParams) {
    const queryString = new URLSearchParams(params)
    const baseUrl = this.baseUrl + '/product-statuses'
    const url = queryString ? baseUrl + `?${queryString}` : baseUrl
    return this.httpApi.get<PaginatedResponse<ProductStatus>>(url)
  }

  createProduct(data: object) {
    const url = this.baseUrl + '/products'
    return this.httpApi.post<Product>(url, data)
  }
}
