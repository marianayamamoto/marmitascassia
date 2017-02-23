import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule }   from '@angular/router';
import { AngularFireModule } from 'angularfire2';


// Firebase configuration
export const firebaseconfig = {
    apiKey: "AIzaSyCkmKLYYpqXVizWvU2cmDw24hp8DDbF4RA",
    authDomain: "marmitascassia.firebaseapp.com",
    databaseURL: "https://marmitascassia.firebaseio.com",
    storageBucket: "marmitascassia.appspot.com",
    messagingSenderId: "933582000572"
  };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule,
    AngularFireModule.initializeApp(firebaseconfig),
  ],
  exports: [],
  declarations: [],
  providers: []
})

export class CoreModule {

}
