import { Component } from '@angular/core'; 
import { IProduct } from './IProduct';

@Component({ 
  templateUrl: './product-details.component.html',

})

export class ProductDetailsComponent  {
  pageTitle: string = 'Product Details';
  Name : any ='ajay';

product : IProduct =  {
  Name:'TV',
  Code : 'TV0001'
} ;



  constructor () {}
  ngOnInit () {console.log('test')}

  Show(item: any):void {
    console.log(item);
  }
  
   
}