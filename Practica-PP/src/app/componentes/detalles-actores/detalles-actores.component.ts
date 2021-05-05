import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalles-actores',
  templateUrl: './detalles-actores.component.html',
  styleUrls: ['./detalles-actores.component.css']
})
export class DetallesActoresComponent implements OnInit {

  @Input() detalles : Actor;

  constructor() { }

  ngOnInit(): void {
  }

}
