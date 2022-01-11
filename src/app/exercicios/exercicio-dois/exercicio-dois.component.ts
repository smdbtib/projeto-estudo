import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.scss']
})
export class ExercicioDoisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  age: number = 16;

  aumentarAge(){
    this.age++;
  }

  diminuirAge(){
    this.age--;
  }
}
