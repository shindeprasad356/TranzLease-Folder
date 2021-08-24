import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchresultComponent {
  //public SearchResult: VMSearchResult[];

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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<VMSearchResult[]>(baseUrl + 'api/VehicleSearch/GetAllVehicleSearchResult').subscribe(result => {
    //  this.SearchResult = result;
    //  console.log(result);
    //}, error => console.error(error));
  }

  public ViewDetails() {
  }
}

interface VMSearchResult {
  Make: string;
  Model: string;
  Variant: string;
  VehicleID: number;
  Exshowroom: number
}
