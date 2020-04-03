import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskstring'
})
export class MaskstringPipe implements PipeTransform {

  transform(value: string, mask:boolean ): string {
    
    if(mask)
      return value;
    else{
      return '*'.repeat(value.length);
    }
      
    //return null;
  }

}
