import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(value: number): number {
    return Math.pow(value,2);
  }

}
