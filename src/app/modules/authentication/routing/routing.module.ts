import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "../registration/signup/signup.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'auth/signin',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
