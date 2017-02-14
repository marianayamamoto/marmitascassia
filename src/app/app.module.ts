import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule }   from '@angular/router';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

// Firebase configuration
export const firebaseconfig = {
    apiKey: "AIzaSyCkmKLYYpqXVizWvU2cmDw24hp8DDbF4RA",
    authDomain: "marmitascassia.firebaseapp.com",
    databaseURL: "https://marmitascassia.firebaseio.com",
    storageBucket: "marmitascassia.appspot.com",
    messagingSenderId: "933582000572"
  };

// App components
import { AppComponent } from './components/app.component';
import { Components } from './components/components';

// Services
import { Services } from './services/services';

// Routes
import { Routes } from './routes/routes';

@NgModule({
  declarations: Components,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig),
    RouterModule.forRoot(Routes),
    ToastModule.forRoot()
  ],
  providers: Services,
  bootstrap: [AppComponent]
})

export class AppModule { }
