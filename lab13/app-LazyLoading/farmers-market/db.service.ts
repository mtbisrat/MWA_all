import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FarmProduction{
  private produce=new Array<string>();
  constructor(private id:number, public farm:string){

  }

  getId(){
    return this.id;
  }
  addProduce(product:string){
    this.produce.push(product);
  }
}
@Injectable()
export class DbService {

  private farmData:FarmProduction[]=[];
  constructor() { 
    this.addHardCodedData();
  }

  private addHardCodedData(){
    let obj1=new FarmProduction(1, 'Natural Prairie 1');
    obj1.addProduce('tomato');
    obj1.addProduce('onion');

    let obj2=new FarmProduction(2, 'Natural Prairie 2');
    obj2.addProduce('potato');
    obj2.addProduce('raddish');

    let obj3=new FarmProduction(3, 'Natural Prairie 3');
    obj3.addProduce('potato');
    obj3.addProduce('onion');

    this.farmData.push(obj1);
    this.farmData.push(obj2);
    this.farmData.push(obj3);
  }
  getData(id) {
    for (var idx in this.farmData){ 
      if(this.farmData[idx].getId()==id){ 
            return JSON.stringify(this.farmData[idx], undefined,  2);  
      }
    }
  }
  getAllData(){
    return this.farmData;
  }
}
