import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {ButtonComponent} from "../../../components/button/button.component";
import {CardComponent} from "../../../components/card/card.component";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    ButtonComponent,
    CardComponent,
  ]
})
export class LoginModule { }
