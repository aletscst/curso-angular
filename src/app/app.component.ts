import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public datos:string = '';
  public res:string = '';

  public imagen:string = 'https://miro.medium.com/max/3000/1*-f6StBRZQiuOAz7fdqWFKw.png';

  ordenar(): void{
    let separados:string[] = this.datos.split(',');
    separados.sort();
    this.res = separados.join();
  }

}
