import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
  <button  md-raised-button (click)="login()"><img width="30" src="google-logo.png" />Login</button>
  <button  md-raised-button (click)="logout()">Logout</button>
  `,
})
export class LoginComponent {
  user = {};
  constructor(public af: AngularFire) {
  this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
      } else {
        // user not logged in
        this.user = {};
      }
    });
  }
  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }
}
