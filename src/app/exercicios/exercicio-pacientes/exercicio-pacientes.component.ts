import { Component, OnInit } from '@angular/core';
import { Pacientes } from './modulo/paciente';

@Component({
  selector: 'app-exercicio-pacientes',
  templateUrl: './exercicio-pacientes.component.html',
  styleUrls: ['./exercicio-pacientes.component.scss']
})
export class ExercicioPacientesComponent implements OnInit {
  constructor() { }

  id = '28';
  nomeAdd = 'Samuel';
  sexo = '';
  endereco= '';
  cpf= '';
  telefone= '';
  dataNascimento= '';
  convenio= '';
  addPaciente: Pacientes = {id: this.id, nome: this.nomeAdd, sexo: this.sexo, endereco: this.endereco, cpf: this.cpf, telefone: this.telefone, dataNascimento: this.dataNascimento, convenio: this.convenio}

  pacientes: Pacientes[] = [
    {id: '12', nome: 'Samuel Dias', sexo: 'M', endereco: 'Rua São Bartlomeu', cpf: '0000000000', telefone: '00000000', dataNascimento: '03/05/1989', convenio: 'Viva'},
    {id: '13', nome: 'Raiza Freitas',sexo: 'F', endereco: 'Rua João Vicente', cpf: '0000000000', telefone: '00000000', dataNascimento: '03/05/1987', convenio: 'VivaMelhor'},
    {id: '15', nome: 'Denis Andrade', sexo: 'M', endereco: 'Rua Teodoro', cpf: '0000000000', telefone: '00000000', dataNascimento: '03/05/2017', convenio: 'VivaBem'},
    {id: '17', nome: 'Bianca Pereira',sexo: 'F', endereco: 'Rua Vila Nova', cpf: '0000000000', telefone: '00000000', dataNascimento: '03/05/1994', convenio: 'VivaSaude'}
  ];

  delete(id: string){
    const novaListaPacient = this.pacientes.filter((p) => p.id !== id);
    this.pacientes = novaListaPacient;
  }

  add(){
    this.pacientes.push(this.addPaciente);
   }

  viewColumn = ['id', 'nome', 'sexo' ,'endereco', 'cpf', 'telefone', 'dataNascimento', 'convenio', 'acoes'];

  ngOnInit(): void {
  }

}
