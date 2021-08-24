import { Component ,OnInit} from '@angular/core';
 
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({ 
  templateUrl: './customer-details.component.html'
})

export class CustomerDetailsComponent  implements OnInit {
  
  constructor ( 
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) {}
    
    editForm = this.fb.group({
     Name : new FormControl('ABCD'),
      Code : new FormControl('SSSS') 
    });


  ngOnInit () 
  {
    //this.editForm.patchValue({'Name': 'Ajay Name', 'Code':'ABCD'});
    console.log('ProductDetailsComponent..init..');
  }

Save(item:any):void {
  console.log(item);  
  alert(item.Name)
  
}

}