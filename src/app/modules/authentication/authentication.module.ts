import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationModule} from "./registration/registration.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    RegistrationModule
  ]
})
export class AuthenticationModule { }
