import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { AppGithubComponent } from './app-github/app-github.component';
import { AppSorteioComponent } from './app-sorteio/app-sorteio.component';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';

/* METADADOS */

@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent,
    AppSorteioComponent,
    AppGithubComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule,
    CompartilhadoModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,

  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
