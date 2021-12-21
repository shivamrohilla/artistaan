import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"" , component:ProductsComponent
  },
  {
    path:"view" , component:ProductsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
