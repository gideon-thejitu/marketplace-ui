import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  { ApmService, ApmModule, ApmErrorHandler } from "@elastic/apm-rum-angular";

import { ButtonComponent } from './components/button/button.component';
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import { CardComponent } from './components/card/card.component';
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {NzMessageService} from "ng-zorro-antd/message";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ApmModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonComponent,
    AuthenticationModule,
    DashboardModule,
    CardComponent
  ],
  providers: [
    ApmService,
    {provide: NZ_I18N, useValue: en_US},
    {
      provide: ErrorHandler,
      useClass: ApmErrorHandler
    },
    NzMessageService
  ],
  exports: [
    CardComponent,
    ButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(service: ApmService) {
    const apm = service.init({
      serviceName: 'Market Place UI',
      serverUrl: 'http://localhost:8200'
    })
    apm.setUserContext({
      'username': 'foo',
      'id': 'bar'
    })
  }
}
