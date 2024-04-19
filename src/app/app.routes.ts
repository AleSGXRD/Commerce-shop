import { Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ListProductComponent
    },
    {
        path: ':page',
        component: ListProductComponent,
        
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent
    }
];
