import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioPacientesComponent } from './exercicio-pacientes/exercicio-pacientes.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';

const routes: Route[] = [
  {
    path: 'exercicio-um',
    component: ExercicioUmComponent,
  },
  {
    path: 'exercicio-dois',
    component: ExercicioDoisComponent,
  },
  {
    path: 'exercicio-pacientes',
    component: ExercicioPacientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
