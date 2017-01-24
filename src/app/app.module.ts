import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule }   from '@angular/router';

// Firebase configuration
export const firebaseconfig = {
    apiKey: "AIzaSyCkmKLYYpqXVizWvU2cmDw24hp8DDbF4RA",
    authDomain: "marmitascassia.firebaseapp.com",
    databaseURL: "https://marmitascassia.firebaseio.com",
    storageBucket: "marmitascassia.appspot.com",
    messagingSenderId: "933582000572"
  };

// App components
import { ProductsListComponent } from './components/product/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard.component';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/detail/:id',
        component: ProductDetailComponent
      }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
