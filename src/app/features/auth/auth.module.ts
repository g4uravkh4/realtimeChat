import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container/form-container.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    FormContainerComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
