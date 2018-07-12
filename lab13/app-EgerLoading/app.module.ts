import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { myRoutes } from "./app-routing.module";
import {FarmersMarketModule, FARM_DETAILS_ROUTE} from './farmers-market/farmers-market.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    RouterModule.forRoot([
     { path: 'farmDetails', children: FARM_DETAILS_ROUTE }    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
