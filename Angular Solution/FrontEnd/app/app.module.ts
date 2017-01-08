//the main entry point of the angular appliction
//main=>appModule=>aooComponent
//here we reference all the component globally to viwed from all over the application.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { PageNotFoundComponent } from './components/page-not-found.component';
import { AboutUsComponent } from './components/about-us.component';
import {AppRoutingModule} from './customModules/app-routing.module';
import { WelcomeComponent } from './components/welcome.component';
import { ProductModule } from './components/product/productsModules/product.module';


@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        HttpModule,        
        ProductModule,
        AppRoutingModule  
    ],
    declarations:
    [
        AppComponent,     
        WelcomeComponent,
        PageNotFoundComponent,
        AboutUsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
