import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container/form-container.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [FormContainerComponent, SigninComponent, SignupComponent],
  imports: [CommonModule, MatSnackBarModule],
})
export class AuthModule {}
