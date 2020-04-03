import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer , SafeResourceUrl  } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domsanitazer : DomSanitizer){

  }

  transform(value: string, ...args: any[]): SafeResourceUrl {
    return this._domsanitazer.bypassSecurityTrustResourceUrl(value);
  }

}
