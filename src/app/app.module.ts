import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  { ApmService, ApmModule } from "@elastic/apm-rum-angular";

import { NzLayoutModule } from "ng-zorro-antd/layout";

import { ProductFormComponent } from './product-form/product-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import { ProductsTableComponent } from './products-table/products-table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzMessageModule} from "ng-zorro-antd/message";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    DashboardComponent,
    ProductsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    ApmModule,
    NzTableModule,
    NzDividerModule,
    NzTypographyModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzInputNumberModule,
    NzMessageModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ApmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(service: ApmService) {
    const apm = service.init({
      serviceName: 'Market Place UI',
      serverUrl: 'http://localhost:8200'
    })
  }
}
