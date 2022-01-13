import { Component, OnInit } from '@angular/core';

import { SorteioService } from './../../compartilhado/services/sorteio.service';

@Component({
  selector: 'app-app-sorteio',
  templateUrl: './app-sorteio.component.html',
  styleUrls: ['./app-sorteio.component.scss'],
})
export class AppSorteioComponent implements OnInit {
  values: string = '';
  sorteado: string = '';

  enviar() {
    const nomes = this.values.split('\n');
    this.SorteioService.sortear(nomes).subscribe({
      next: (nome) => (this.sorteado = nome),
      error: (erro) => alert(erro),
      complete: () => console.log(`Observable finalizado`),
    });

    //console.log(this.values.split('\n'));
  }
  constructor(private SorteioService: SorteioService) {}

  ngOnInit(): void {}
}
