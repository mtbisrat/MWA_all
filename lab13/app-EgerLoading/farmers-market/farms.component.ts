import { ElementRef, Renderer2,Component, OnInit, ViewChild } from '@angular/core';
import {FarmProduction, DbService} from './db.service';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-farms',
  template: `
    <ul>
      <li *ngFor="let farm of farms" (click)=onLink()> 
        <a [routerLink]="['/farm',farm.id]">
          {{farm.farm}}
        </a>
      </li>
      <router-outlet></router-outlet>
    </ul>
  `,
  styles: ['div{display:none};'],
  providers: [DbService]
})
export class FarmsComponent implements OnInit {

  private subscription: Subscription;
  id: string;
  farms:FarmProduction[]=[];
  p:any;

  constructor(private activatedRoute:ActivatedRoute, 
    private dbService:DbService, private e: ElementRef, 
    private r: Renderer2) {

    this.farms=this.dbService.getAllData();
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
   }
   

   ngOnInit(){
    this.onLink();
   }
   onLink(){
     if(this.id){
        if(this.p){
          this.r.removeChild(this.e.nativeElement, this.p);
        }
        this.p = this.r.createElement('p');
        const text = this.r.createText(this.dbService.getData(this.id));
        this.r.appendChild(this.p, text);
        this.r.appendChild(this.e.nativeElement, this.p);
     }
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
