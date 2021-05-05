import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-listado-paises-actores',
  templateUrl: './listado-paises-actores.component.html',
  styleUrls: ['./listado-paises-actores.component.css']
})
export class ListadoPaisesActoresComponent implements OnInit {

  @Input() detallePais : Actor;

  constructor() { }

  ngOnInit(): void {
  }

}
