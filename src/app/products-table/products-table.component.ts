import { Component } from '@angular/core';
import {Product} from "./interfaces/product";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})

export class ProductsTableComponent {
  products: Product[] = [
    {
      id: 1,
      uuid: "1",
      name: 'Product 1',
      description: 'Description',
      isDeleted: false,
      statusId: 1
    },
    {
      id: 2,
      uuid: "2",
      name: 'Product 2',
      description: 'Description',
      isDeleted: false,
      statusId: 1
    },
  ];
}
