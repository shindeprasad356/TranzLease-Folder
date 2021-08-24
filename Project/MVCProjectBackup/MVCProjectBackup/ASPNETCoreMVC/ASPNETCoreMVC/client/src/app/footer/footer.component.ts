import { Component, ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-footer',
   templateUrl: './footer.component.html',
       styles: [
    ]
})
export class FooterComponent implements OnInit {
  @ViewChild("footerContact") divContact: ElementRef;

    public render;
    constructor(private renderer: Renderer2) {
        this.render = renderer;
    }

    showContacts() {
        this.divContact.nativeElement.className = "contact open";
       
  }

    hideContacts() {
        this.divContact.nativeElement.className = "contact hide";
    }

    ngOnInit(): void {
    }
}
