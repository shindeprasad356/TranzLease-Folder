import { Component, Inject,TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchresultComponent {
  //public SearchResult: VMSearchResult[];
  modalRef: BsModalRef;
  SearchResult: VMSearchResult[] = [
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10001, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10002, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10003, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10004, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10005, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10006, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10007, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10008, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10009, Exshowroom: 800000 },
    { Make: 'Honda', Model: 'Honda', Variant: 'Honda', VehicleID: 10010, Exshowroom: 800000 },
  ];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,private modalService: BsModalService) {
    //http.get<VMSearchResult[]>(baseUrl + 'api/VehicleSearch/GetAllVehicleSearchResult').subscribe(result => {
    //  this.SearchResult = result;
    //  console.log(result);
    //}, error => console.error(error));
  }

  public ViewDetails() {
  }
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3, "dots": true};
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
    
  breakpoint(e:any) {
    console.log('breakpoint');
  }
    
  afterChange(e:any) {
    console.log('afterChange');
  }
    
  beforeChange(e:any) {
    console.log('beforeChange');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.modalRef.setClass('view-plan');
  }

 
    
}

interface VMSearchResult {
  Make: string;
  Model: string;
  Variant: string;
  VehicleID: number;
  Exshowroom: number
}
