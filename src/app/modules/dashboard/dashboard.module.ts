import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingModule} from "./routing/routing.module";
import {CreateProductComponent} from "./create-product/create-product.component";
import {DashboardHeaderComponent} from "./components/dashboard-header/dashboard-header.component";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSelectModule} from "ng-zorro-antd/select";
import {ButtonComponent} from "../../components/button/button.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {DashboardHomeComponent} from "./home/dashboard-home.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzIconModule} from "ng-zorro-antd/icon";
import {ProductsListComponent} from "./products-list/products-list.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    CreateProductComponent,
    UpdateProductComponent,
    DashboardHeaderComponent,
    ProductFormComponent,
    DashboardHomeComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    ButtonComponent,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzIconModule,
    NzTableModule,
    NzSpaceModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzButtonModule,
  ],
  exports: [
    DashboardHeaderComponent,
    ProductFormComponent
  ]
})
export class DashboardModule { }
