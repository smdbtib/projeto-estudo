import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FiltePipe implements PipeTransform {
/*          Dado que está transitando pelo pipe e o segundo será o filtro que será aplicado*/
  transform(data: string[], query: string): string[] {
    return data.filter((txt) => txt.toLowerCase().startsWith(query.toLowerCase()));
  }

}
