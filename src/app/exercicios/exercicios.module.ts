import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioPacientesComponent } from './exercicio-pacientes/exercicio-pacientes.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';


@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    ExercicioPacientesComponent

  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule

  ],
  exports:[
    ExercicioUmComponent,
    ExercicioDoisComponent,
    ExercicioPacientesComponent
  ]
})
export class ExerciciosModule { }
