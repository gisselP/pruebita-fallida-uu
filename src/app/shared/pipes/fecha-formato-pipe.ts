import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaFormato',
  standalone: false
})
export class FechaFormatoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
