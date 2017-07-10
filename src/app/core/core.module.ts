import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterialModule } from '@angular/material';
import { environment } from '../../environments/environment';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),// imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
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
