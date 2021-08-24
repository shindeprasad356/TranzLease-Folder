/// <reference path="../animations/ngifanimation.ts" />
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngifanimation } from '../animations/ngifanimation';
import { ModalLoaderComponent } from '../shared/modal-loader.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ngifanimation],
  styleUrls: [
    './home.component.css'

  ]
})
export class HomeComponent implements AfterViewInit {
  private route;
  public ShowSearchBox: boolean = false;
  public ShowHomepageslider: boolean = false;
  public isLoading: boolean = false;
  @ViewChild(ModalLoaderComponent) ModalLoader: ModalLoaderComponent;

  constructor(private router: Router, private slider: ElementRef) {
    console.log("from constructor");
    this.route = router;
    this.isLoading = true;
    console.log(this.isLoading);
  }

  @ViewChild("mySlider") divslider: ElementRef;

  ngAfterViewInit() {
    console.log("from ngAfterViewInit");
    this.isLoading = false;
    // alert(this.isLoading);
    console.log(this.isLoading);
  }
  btnSearchCar() {
    this.ShowSearchBox = true;
    // this.route.navigate(['/search']);
  }

  GetSearchResultByAnyCar() {
    //this.ModalLoader.Show();
    this.route.navigate(['/search']);
  }

  ShowSlider() {
    this.ShowHomepageslider = true;
    // this.divslider.nativeElement.style.opacity = "1";
    // this.divslider.nativeElement.style.visibility = "inherit";
    // this.divslider.nativeElement.style.display = "block";
  }

  HideSlider() {
    this.ShowHomepageslider = false;
    // this.divslider.nativeElement.style.opacity = "0";
    // this.divslider.nativeElement.style.visibility = "hidden";
    // this.divslider.nativeElement.style.display = "none";
  }

  OnBack() {
    this.ShowSearchBox = false;
  }

  ngOnInit(): void {
  }
}
