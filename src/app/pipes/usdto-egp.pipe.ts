import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP',
  standalone: true
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value : number): number {
    return value*35;
  }

}
