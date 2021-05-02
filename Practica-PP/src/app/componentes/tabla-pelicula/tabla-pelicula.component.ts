import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listado: Pelicula[];
  @Output() peliculaSelecc: EventEmitter<any> = new EventEmitter<any>();
  @Input() pelicula: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }
  

  mostrar(pelicula){
    //console.log(pelicula);
    this.peliculaSelecc.emit(pelicula);
  }
}
