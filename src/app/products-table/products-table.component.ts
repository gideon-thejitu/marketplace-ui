import {Component, OnInit} from '@angular/core';
import {Product} from "./interfaces/product";
import {Router} from "@angular/router";
import {ProductsService} from "../services/products.service";
import {PaginatedResponse} from "../interfaces/paginated-response";
import {NzTableQueryParams} from "ng-zorro-antd/table";

type ProductParams = {
  page: number,
  limit: number
}
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  loading = true;
  productParams: ProductParams = {
    page: 1,
    limit: 10,
  }

  products: PaginatedResponse<Product> = {
    ...this.productParams,
    total: 0,
    results: []
  }
  constructor(private router: Router,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.loadProducts(this.productParams);
  }

  onAddProductClick() {
    this.router.navigate(['dashboard/products/create'])
  }

  loadProducts(params: ProductParams) {
    this.loading = true;
    this.productsService
      .getProducts(params)
      .subscribe(data => {
        this.products = data
        console.log(data.results[0])
      }, () => {
        return
      },
      () => {
        this.loading = false;
      })
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    if (params.pageIndex === 1) {
      return
    }

    const { pageSize, pageIndex} = params

    const queryParams: ProductParams = {
      page: pageIndex,
      limit: pageSize
    }

    this.loadProducts(queryParams);
  }
}
