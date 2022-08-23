//lubreria por defecto que se importa
import { Component } from '@angular/core';

//esta funcion es de interpolacion , la cual hace al componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Hola amigos de youtube';

  //TIPO DE DATOS
  //numericos
  precio : number=6.20;
  nuevo_precio : number=this.precio +20;
  //string 
  color: string = "white";
  nombre: string = "Oscar Emilio";
  session: string = this.nombre + this.color + "prueba";
  // boolean
  estado: boolean = true;
  //tipo desconocido
  result: any = "la compilacion fue correcta";
  //arreglos
  list: number[] = [1,2,3];
  //objeto
  valor1:any={curso:"angular",version:'Type12'};
  //array de imagenes
  img = "https://laauxiliadora.com/assets/images/artes/LOGOS/auxi.png";
  img_array = "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=";

}
