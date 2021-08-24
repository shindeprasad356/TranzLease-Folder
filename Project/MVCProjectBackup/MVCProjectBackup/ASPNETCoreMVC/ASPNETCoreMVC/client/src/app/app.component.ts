
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clientapp';
  public url1: string = "";
  public route;
  constructor(private router: Router, private location: Location) {
    this.route = router;
  }

 

  ngOnInit() {
    //this.url1 = this.location.path();
    //if (this.url1 == '/') {
    //  this.url1 = '/home';
    //}
    console.log(this.url1);
  }
}


