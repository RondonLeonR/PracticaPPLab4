import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  actorSelecc: Actor;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetallesActor(actor:Actor){
    this.actorSelecc = actor;
  }
}
