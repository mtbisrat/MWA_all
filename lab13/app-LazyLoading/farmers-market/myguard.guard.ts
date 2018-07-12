import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {DbService} from './db.service'


export class MyguardGuard implements CanActivate {
  
  public dbService: DbService;
  constructor(){
    this.dbService=new DbService();
  }

  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
      let id = next.params.id ;
      let strFarmData:string=this.dbService.getData(id);
      
      if(!strFarmData){
        return false;
      }
      console.log(strFarmData);
    return true;
  }
}
