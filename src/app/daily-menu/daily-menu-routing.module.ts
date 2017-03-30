import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyMenuListComponent } from './daily-menu-list/daily-menu-list.component';
import { DailyMenuDetailComponent } from './daily-menu-detail/daily-menu-detail.component';
import { DailyMenuFormComponent } from './daily-menu-form/daily-menu-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/daily-menus',
        pathMatch: 'full'

    },
    {
        path: 'daily-menus',
        component:DailyMenuListComponent
    },
    {
        path: 'daily-menus/create',
        component:DailyMenuFormComponent
    },
    {
        path: 'daily-menus/detail/:id',
        component:DailyMenuDetailComponent
    },
    {
        path: 'daily-menus/edit/:id',
        component:DailyMenuFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DailyMenuRoutingModule {

}

export const routedComponents = [
    DailyMenuListComponent,
    DailyMenuFormComponent,
    DailyMenuDetailComponent
];
