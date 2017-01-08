

import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ProductDetailsComponent } from '../components/product/productComponents/product-details.component';
import { WelcomeComponent } from '../components/welcome.component';
//import { ProductListComponent } from '../components/product/productComponents/productList.component';
import { PageNotFoundComponent } from '../components/page-not-found.component';
import { AboutUsComponent } from '../components/about-us.component';
   
   
   // { path: 'products', component: ProductListComponent },
   // { path: 'product/:id', component: ProductDetailsComponent },

const appRoutes: Routes = [
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: '', component:PageNotFoundComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations:[
     
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}