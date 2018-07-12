import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FarmsComponent } from './farms.component';
import { MyguardGuard } from "./myguard.guard";
import { ErrorComponent } from './error.component';


export const FARM_DETAILS_ROUTE = [{ path: '', component: FarmsComponent }];
@NgModule({
  declarations: [FarmsComponent, ErrorComponent],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
      { path: 'farmDetails', component: FarmsComponent},
      { path: 'farm/:id', component: FarmsComponent, canActivate:[MyguardGuard] },
      { path: 'error', component:ErrorComponent },
      { path: '**', redirectTo: '/' }
     ])
  ],
  providers: [MyguardGuard],

  
  bootstrap: [FarmsComponent]
})
export class FarmersMarketModule { }
