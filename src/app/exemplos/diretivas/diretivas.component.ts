import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  hide: boolean = false;

  setHide(){
    this.hide = true;
  }

  alimento: string = '';

  addAlimento(){
    if (this.alimento.length > 0) {
      this.compras.push(this.alimento);
      this.alimento = "";
    }else{
      alert(`Entrada inválida`);
    }
  }

  status: string = '';

  compras = ['Arroz', 'Carne', 'Tempero'];

  constructor() { }

  ngOnInit(): void {
  }

}
