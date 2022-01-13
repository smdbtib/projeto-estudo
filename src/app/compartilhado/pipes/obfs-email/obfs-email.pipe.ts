import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string){ // PASSANDO POR PARÂMETRO O EMAIL DO USUÁRIO
    const [user, dominio] = email.split('@'); // SEPARNDO USER DO DOMINIO DO EMAIL VIA O @ E ARMAZENADO EM UM ARRAY
    const inicial = user[0]; // PEGANDO A PRIMEIRA LETRA DO USER E ARMAZENANDO
    const obfs = '*'.repeat(user.length - 1); // ADD * NAS LETRAS DE USER -1 REFERENTE A PRIMEIRA LETRA
    return `${inicial}${obfs}@${dominio}`; // CONCATENADO DADOS PARA RETORNAR A STRING MONTADA
  }

}
