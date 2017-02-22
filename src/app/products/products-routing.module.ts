import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'

    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/create',
        component: ProductFormComponent
    },
    {
        path: 'products/detail/:id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {

}

export const routedComponents = [
    ProductListComponent,
    ProductFormComponent,
    ProductDetailComponent
];
