
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ProductDetailComponent
    }
];

@NgModule({
    declarations: [
        ProductDetailComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    providers: [],
})
export class ProductModule { }
