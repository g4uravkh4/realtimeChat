import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  router: any;
  constructor(private auth: AuthService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      displayName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    });
  }

  signUp() {
    this.auth.signUp(this.form.value).subscribe({
      next: () => this.router.navigate(['chat']),
      error: (error) => this.snackbar.open(error.message),
    });
  }
}
