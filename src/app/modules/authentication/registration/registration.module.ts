import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
  ]
})
export class RegistrationModule { }
