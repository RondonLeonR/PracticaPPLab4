import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/service/peliculas.service';

@Component({
  selector: 'app-listado-peliculas-actores',
  templateUrl: './listado-peliculas-actores.component.html',
  styleUrls: ['./listado-peliculas-actores.component.css']
})
export class ListadoPeliculasActoresComponent implements OnInit {

  @Input() actorSeleccionadoListaPeliculas : Actor;

  peliculasActor: Array<Pelicula>;
  listaPeliculas: any;

  
  constructor(
    private service: PeliculasService
  ) { 
    this.service.getAllMovies().subscribe(data =>{
      //console.log(data);
      this.listaPeliculas = data;
    });
  }

  ngOnInit(): void {
    //console.log(this.listaPeliculas);
  }

  actorPelicula(){
    if (this.actorSeleccionadoListaPeliculas) {
      //console.log(this.actorSeleccionadoListaPeliculas);
      let indicePelicula = 0;
      this.peliculasActor = new Array<Pelicula>();
      this.listaPeliculas.forEach(peli => {
        peli.actores.forEach(element => {
          //console.log(element);
          if(element.nombre == this.actorSeleccionadoListaPeliculas.nombre){
            //console.log("Se encontro el actor" + indicePelicula);
            this.peliculasActor.push(peli);
            //console.log(this.peliculasActor);
            
          }
          else{
            //console.log( indicePelicula);
            indicePelicula++;
            
          }
        });
        indicePelicula = 0;
      });
      return true;
    }
  }

}
