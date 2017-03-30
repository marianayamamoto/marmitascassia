import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingFormComponent } from './building-form/building-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/buildings',
        pathMatch: 'full'

    },
    {
        path: 'buildings',
        component:BuildingListComponent
    },
    {
        path: 'buildings/create',
        component:BuildingFormComponent
    },
    {
        path: 'buildings/detail/:id',
        component:BuildingDetailComponent
    },
    {
        path: 'buildings/edit/:id',
        component:BuildingFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BuildingRoutingModule {

}

export const routedComponents = [
    BuildingListComponent,
    BuildingFormComponent,
    BuildingDetailComponent
];
