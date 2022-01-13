import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FiltePipe } from './pipes/filter/filte.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';
import { ObfsEmailPipe } from './pipes/obfs-email/obfs-email.pipe';


@NgModule({
  declarations: [
    FiltePipe,
    IncPipe,
    ObfsEmailPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    FiltePipe,
    IncPipe,
    ObfsEmailPipe
  ]
})
export class CompartilhadoModule { }
