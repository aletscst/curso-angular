import { Component, OnInit } from '@angular/core';
import { Tecnologico } from '../models/tecnologico';

@Component({
  selector: 'app-tecnologicos',
  templateUrl: './tecnologicos.component.html',
  styleUrls: ['./tecnologicos.component.scss']
})
export class TecnologicosComponent implements OnInit {
  
  public idShow:number = 0;
  
  public fecha:Date = new Date();

  public numero:number = 5;

  public tecnologicos:Tecnologico[] = [
    {id:1,nombre:'TESE',imagen:'https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_tese.jpg',descripcion:'Tecnológico de Estudios Superiores de Ecatepec es una Universidad del Tecnológico Nacional de México Pública enfocada a la Educación Tecnológica directamente dependiente del Gobierno del Estado de México, con presupuesto y personalidad Jurídica propias. A nivel Estado es una de las escuelas más prestigiosas'},
    {id:2,nombre:'TESCO',imagen:'https://universidadesdemexico.mx/logos/original/logo-tecnologico-de-estudios-superiores-de-coac',descripcion:'Tecnológico de Estudios Superiores de Coacalco es una Universidad del Tecnológico Nacional de México Pública enfocada a la Educación Tecnológica directamente dependiente del Gobierno del Estado de México, con presupuesto y personalidad Jurídica propias. A nivel Estado es una de las escuelas más prestigiosas'},
    {id:3,nombre:'TESH',imagen:'https://sg.com.mx/sites/default/files/2018-04/TEScolor.jpg',descripcion:'Tecnológico de Estudios Superiores de Huixquilucan es una Universidad del Tecnológico Nacional de México Pública enfocada a la Educación Tecnológica directamente dependiente del Gobierno del Estado de México, con presupuesto y personalidad Jurídica propias. A nivel Estado es una de las escuelas más prestigiosas'},
    {id:4,nombre:'TECTE',imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQousj_IRDwcnyX4XWEdViLgdDJrD4UW9Pyhg&usqp=CAU',descripcion:'Tecnológico de Estudios Superiores de Tianguisquitenco es una Universidad del Tecnológico Nacional de México Pública enfocada a la Educación Tecnológica directamente dependiente del Gobierno del Estado de México, con presupuesto y personalidad Jurídica propias. A nivel Estado es una de las escuelas más prestigiosas'},
  ];

  constructor(){}

  ngOnInit(): void {
  }


  mostrar(id:number){
    this.idShow = id;
  }





  //public datos:string = '';
  //public res:string = '';
//
  //public alumnos = [
  //  {id:1,nombre:'Alex'},
  //  {id:2,nombre:'Areli'},
  //  {id:3,nombre:'Neto'},
  //  {id:4,nombre:'Beto'}
  //]
//
  //ordenar(): void{
  //  let separados:string[] = this.datos.split(',');
  //  separados.sort();
  //  this.res = separados.join();
  //}


}
