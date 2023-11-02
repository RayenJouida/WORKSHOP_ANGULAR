import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from 'src/app/components/list-products/list-products.component';
import { ProductComponent } from 'src/app/pages/product/product.component';

const routes: Routes = [
  {path:'list',component:ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
