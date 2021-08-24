import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements AfterViewInit {
  isLoading: boolean;

  
  
  constructor() {
    this.isLoading = true;
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.isLoading = false;
  }

}
