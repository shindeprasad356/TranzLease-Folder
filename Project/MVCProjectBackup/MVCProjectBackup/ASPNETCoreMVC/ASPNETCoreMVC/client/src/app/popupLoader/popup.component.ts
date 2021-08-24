import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: [
    './popup.component.css'

  ]
})
export class PopupComponent {
  @ViewChild('modalloader', { static: false }) modalloader: TemplateRef<any>;

  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) { }

  //openModal(modalloader: TemplateRef<any>) {
  //  this.modalRef = this.modalService.show(this.modalloader, { class: 'modal-sm' });
  //}

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  Show() {
    this.modalRef = this.modalService.show(this.modalloader, { class: 'modal-sm' });
  }
}
