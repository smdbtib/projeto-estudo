import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-estudo';
  name = 'Samuel';
  idade = 33;

  linkImgem = 'https://images.unsplash.com/photo-1520587210458-bd3bee813b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  alturaImg = 200;
  larguraImg = 200;



  calculaAnoNascimento(): number{
    const today = new Date();

    return today.getFullYear() - this.idade;
  }

  aumentarImg(){
    this.larguraImg += 20;
    this.alturaImg += 15;
  }

  diminuirImg(){
    this.larguraImg -= 20;
    this.alturaImg -= 15;
  }
}


