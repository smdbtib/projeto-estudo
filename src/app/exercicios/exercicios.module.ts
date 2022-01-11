import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';


@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExercicioUmComponent,
    ExercicioDoisComponent
  ]
})
export class ExerciciosModule { }
