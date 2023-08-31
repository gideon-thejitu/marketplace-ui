import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductsTableComponent} from "./products-table/products-table.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent, children: [
      // { path: 'products', component: ProductFormComponent },
      { path: 'products', component: ProductsTableComponent },
      { path: 'products/create', component: ProductFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
