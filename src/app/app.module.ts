import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule, routedComponents } from './app-routing.module';



import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { DialogsModule } from './confirm-dialog/confirm-dialog.module';


// App components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],//Components,
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DashboardModule,
    ProductsModule,
    CategoryModule,
    DialogsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
