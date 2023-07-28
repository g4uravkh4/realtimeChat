import { Component } from '@angular/core';
import { AuthenticationService } from './features/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'realtimeChat';
  constructor(public auth: AuthenticationService, private router: Router) {}

  signOut() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['signin']),
    });
  }
}
