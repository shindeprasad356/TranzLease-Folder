import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';
import { StarComponent } from '../shared/star-component';
import { ModalLoaderComponent } from '../shared/modal-loader.component'

import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    StarComponent,
    ModalLoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule
  ],
  exports: [
    StarComponent,
    ModalLoaderComponent
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
