import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Input()  pelicula:any;

  listaActores : any;
  constructor() { }

  ngOnInit(): void {
  }

  listaActoresPelicula(){
    if(this.pelicula){
      this.listaActores = this.pelicula.actores;
      return true;
    }
  }
}
