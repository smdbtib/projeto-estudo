import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltePipe } from './pipes/filter/filte.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';



@NgModule({
  declarations: [
    FiltePipe,
    IncPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FiltePipe,
    IncPipe
  ]
})
export class CompartilhadoModule { }
