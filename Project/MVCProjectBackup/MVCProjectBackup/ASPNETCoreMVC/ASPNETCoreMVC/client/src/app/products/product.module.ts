import { NgModule } from '@angular/core';   
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Router, RouterModule } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module'; 
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,  
    ProductDetailsComponent
    
  ],
  imports: [  
    CommonModule, 
    FormsModule,  
    SharedModule,
    RouterModule.forChild([
        {path:'',  
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list', 
            component: ProductListComponent,      
            data: {
              title: 'List'
            }
          },
          {
            path: 'edit', 
            component: ProductDetailsComponent,      
            data: {
              title: 'edit'
            }
          },
          {
            path: 'create', 
            component: ProductDetailsComponent,      
            data: {
              title: 'create'
            }
          }  
        ]},  
        
    ])  , 
  ],
  providers: [],
  bootstrap: [],
  exports:[
    RouterModule  
  ]
})
export class ProductModule { }
 
