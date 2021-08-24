import { Component, OnInit, TemplateRef, ViewChild, ViewChildren, Injector } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-loader',
  templateUrl: './modal-loader.component.html',
  styleUrls: ['./modal-loader.component.css']
})
export class ModalLoaderComponent implements OnInit {
  @ViewChild('modalloader', { static: false }) modalloader: any;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private injector: Injector) { }
  ngOnInit(): void {
  }

  Show() {
    this.modalRef = this.modalService.show(this.modalloader);
  }

  Close() {
    this.modalRef.hide();// = this.modalService.show(template);
  }
}
