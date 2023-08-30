import { Component } from '@angular/core';
import {Product} from "./interfaces/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})

export class ProductsTableComponent {
  products: Product[] = [
    {
      id: 1,
      productId: "1",
      name: 'Product 1',
      description: 'Description',
      productStatusId: 1,
      categoryId: 1
    },
    {
      id: 2,
      productId: "2",
      name: 'Product 2',
      description: 'Description',
      productStatusId: 1,
      categoryId: 1
    },
  ];

  constructor(private router: Router) {
  }

  onAddProductClick() {
    this.router.navigate(['dashboard/products/create'])
  }
}
