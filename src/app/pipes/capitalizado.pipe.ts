import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {


  // value    -> es el valor que recibe el pipe en el html
  // todas    -> son los parametros que se pueden mandar por medio del pipe
  // :string  -> es el tipo de dato de salida que tendra el pipe
  transform(value: string, todas: boolean = true): string {

    value = value.toLowerCase();
    let nombres = value.split(' ');

    if(todas){
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      })

      //console.log(nombres);
    }else
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    
    return nombres.join(' ');
  }

}
