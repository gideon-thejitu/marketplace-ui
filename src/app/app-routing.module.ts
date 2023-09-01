import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsTableComponent} from "./products-table/products-table.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent, children: [
      { path: 'products', component: ProductsTableComponent, title: 'Products' },
      { path: 'products/create', component: CreateProductComponent, title: 'New Product' },
      { path: 'products/:id/update', component: UpdateProductComponent, title: 'Update Product' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
