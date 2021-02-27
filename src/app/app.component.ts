import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public datos:string = '';
  public res:string = '';

  public alumnos = [
    {id:1,nombre:'Alex'},
    {id:2,nombre:'Areli'},
    {id:3,nombre:'Neto'},
    {id:4,nombre:'Beto'}
  ]

  ordenar(): void{
    let separados:string[] = this.datos.split(',');
    separados.sort();
    this.res = separados.join();
  }

}
