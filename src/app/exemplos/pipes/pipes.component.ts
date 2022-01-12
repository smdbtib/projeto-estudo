import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  date = new Date();
  nome = 'Samuel Dias';
  percentual = 0.854646;
  salario = 1912;
  user = {
    name: 'Samuel',
    age: 18
  };

  constructor() { }

  ngOnInit(): void {
  }

}
