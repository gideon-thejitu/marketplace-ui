import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardHomeComponent} from "../home/dashboard-home.component";
import {CreateProductComponent} from "../create-product/create-product.component";
import {ProductsListComponent} from "../products-list/products-list.component";
import {UpdateProductComponent} from "../update-product/update-product.component";

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardHomeComponent, children: [
      { path: 'products', component: ProductsListComponent, title: 'Products' },
      { path: 'products/create', component: CreateProductComponent, title: 'New Product' },
      { path: 'products/:id/update', component: UpdateProductComponent, title: 'Update Product' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
