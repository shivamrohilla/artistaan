import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/home-component/home.component';

const routes: Routes = [

  {
    path:"" , loadChildren : ()=>import('./modules/home-module/home-module.module')
    .then(mod=>mod.HomeModule)
  }
,
  {
    path:"home" , loadChildren : ()=>import('./modules/home-module/home-module.module')
    .then(mod=>mod.HomeModule)
  },

  {
    path:"products" , loadChildren : ()=>import('./modules/product-module/product-module.module')
    .then(mod=>mod.ProductModuleModule)
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
