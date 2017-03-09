import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full'

    },
    {
        path: 'categories',
        component:CategoryListComponent
    },
    {
        path: 'categories/create',
        component:CategoryFormComponent
    },
    {
        path: 'categories/detail/:id',
        component:CategoryDetailComponent
    },
    {
        path: 'categories/edit/:id',
        component:CategoryFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CategoryRoutingModule {

}

export const routedComponents = [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryDetailComponent
];
