import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BuildingRoutingModule } from './building-routing.module';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingFormComponent } from './building-form/building-form.component';
import { BuildingService } from './shared/building.service';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        BuildingRoutingModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        MaterialModule
    ],
    declarations: [
        BuildingDetailComponent,
        BuildingListComponent,
        BuildingFormComponent
    ],
    providers: [BuildingService]
})

export class BuildingModule {

}
