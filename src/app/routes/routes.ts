import { DashboardComponent } from '../components/dashboard.component';
import { ProductCreateComponent } from '../components/product/product-create.component';
import { ProductDetailComponent } from '../components/product/product-detail.component';
import { ProductsListComponent } from '../components/product/product-list.component';

export const Routes = [
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
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  }
];