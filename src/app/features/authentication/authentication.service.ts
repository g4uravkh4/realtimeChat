import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { SigninCredentials, SignupCredentials } from './autnentication.model';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {}

  signIn({ email, password }: SigninCredentials) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp({ email, password, displayName }: SignupCredentials) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName })));
  }

  signOut() {
    return from(this.auth.signOut());
  }
}
