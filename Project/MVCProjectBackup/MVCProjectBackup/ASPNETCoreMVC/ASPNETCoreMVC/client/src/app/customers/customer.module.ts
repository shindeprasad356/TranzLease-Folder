 import { NgModule } from '@angular/core'; 
 import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { CommonModule } from '@angular/common'; 
 import { CustomerListComponent } from './customer-list.component';
import { Router, RouterModule } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module';
import { CustomerDetailsComponent } from './customer-details.component';

@NgModule({
  declarations: [
    CustomerListComponent  
  ],
  imports: [    
    CommonModule,  
    FormsModule,
        ReactiveFormsModule,
    SharedModule, 
    RouterModule.forChild([
      {
       path:'',  
    
      children: [        
        {
          path: '',
          redirectTo: 'list',
           pathMatch: 'full'
        },
        {
          path: 'list', 
          component: CustomerListComponent,      
          data: {
            title: 'List'
          }
        },
        {
          path: 'edit', 
          component: CustomerDetailsComponent,      
          data: {
            title: 'edit'
          }
        },
        {
          path: 'create', 
          component: CustomerDetailsComponent,      
          data: {
            title: 'create'
          }
        }]},  
      
  ]) ],
  providers: [],
  bootstrap: [] ,
  exports:[
    RouterModule  
  ]

 
})
export class CustomerModule { }
 
 