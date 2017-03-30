import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DailyMenuRoutingModule } from './daily-menu-routing.module';
import { DailyMenuListComponent } from './daily-menu-list/daily-menu-list.component';
import { DailyMenuDetailComponent } from './daily-menu-detail/daily-menu-detail.component';
import { DailyMenuFormComponent } from './daily-menu-form/daily-menu-form.component';
import { DailyMenuService } from './shared/daily-menu.service';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        DailyMenuRoutingModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        MaterialModule
    ],
    declarations: [
        DailyMenuDetailComponent,
        DailyMenuListComponent,
        DailyMenuFormComponent
    ],
    providers: [DailyMenuService]
})

export class DailyMenuModule {

}
