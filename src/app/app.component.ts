import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán América';

  nombre2:string = 'dAvID canCHé'
  
  arreglo:number[] =  [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje:number = 0.2343;

  salario : number = 1234.5;

  fecha : Date = new Date();

  idioma: String = 'fr';

  activar : boolean = true;

  videoUrl: string = 'https://www.youtube.com/embed/K39CqmF0HK0';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    },4500);
  })

  heroe = {
    nombre : 'Logan',
    clave: 'Wolverine',
    edad: 500,
    calle: {
      calle: 'Primera',
      casa: 20
    }
  };

  modificarIdioma(code :string){
    this.idioma = code;
  }
}
