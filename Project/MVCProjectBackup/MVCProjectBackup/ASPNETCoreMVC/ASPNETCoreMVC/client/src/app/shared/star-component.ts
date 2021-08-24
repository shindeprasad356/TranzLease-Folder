import { Component,OnInit,CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';

@Component({
  selector: 'star-app',
  templateUrl: './star.component.html',
  
})


export class StarComponent implements OnInit {
  checkModel: { left?: boolean; middle?: boolean; right?: boolean } = { left: false, middle: true, right: false };
  constructor () {}
  ngOnInit () {}
}
 