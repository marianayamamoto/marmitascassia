import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


// Firebase configuration
const firebaseconfig = {
    apiKey: "AIzaSyCkmKLYYpqXVizWvU2cmDw24hp8DDbF4RA",
    authDomain: "marmitascassia.firebaseapp.com",
    databaseURL: "https://marmitascassia.firebaseio.com",
    storageBucket: "marmitascassia.appspot.com",
    messagingSenderId: "933582000572"
  };


const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule,
    AngularFireModule.initializeApp(firebaseconfig, firebaseAuthConfig),
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  declarations: [],
  providers: []
})

export class CoreModule {

}
