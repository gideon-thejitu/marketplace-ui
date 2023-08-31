import { Injectable } from '@angular/core';
import {HttpApiService} from "../core/services/http-api.service";
import {environment} from "../../environments/environment";
import {PaginatedResponse} from "../interfaces/paginated-response";
import {HttpGetParams} from "../interfaces/http-get-params";
import {ProductStatus} from "../interfaces/product-status";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = environment.ApiBaseUrl + '/product-statuses'
  constructor(private httpApi: HttpApiService) { }

  getStatuses(params?: HttpGetParams) {
    const queryString = new URLSearchParams(params)
    const url = queryString ? this.baseUrl + `?${queryString}` : this.baseUrl
    return this.httpApi.get<PaginatedResponse<ProductStatus>>(url)
  }
}
