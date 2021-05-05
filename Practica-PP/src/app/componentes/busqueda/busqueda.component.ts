import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

import { PeliculasService} from '../../service/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  pelicula: Pelicula;
  listadoPeliculas: any;

  constructor(private servicePeli:PeliculasService) {
    //this.pelicula = new Pelicula(100, "Zack Snyder's Justice League", "Accion", "03/18/2021",  100,  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" )
    
    /*this.listadoPeliculas = [
    {id: 100, nombre: "Justice League", tipo: "Accion" , fechaDeEstreno: "03/18/2021", cantidadDePublico: 100, FotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" },
    {id: 101, nombre: "Godzilla vs Kong", tipo: "Accion" , fechaDeEstreno: "05/20/2021", cantidadDePublico: 200, FotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" },
    {id: 102, nombre: "Tom & Jerry", tipo: "Comedia" , fechaDeEstreno: "02/26/2021", cantidadDePublico: 1000, FotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6KErczPBROQty7QoIsaa6wJYXZi.jpg" },
    ]*/

    this.servicePeli.getAllMovies().subscribe(data =>{
      //console.log(data);
      this.listadoPeliculas = data;
    });
    console.log(this.listadoPeliculas);
  }

  detallesPeliculas(PeliculaNueva: Pelicula){
    this.pelicula = PeliculaNueva;
  }

  mostrarPelicula(parametroPelicula:Pelicula)
  {
      console.info("Pelicula: ",parametroPelicula);
      this.listadoPeliculas.push(parametroPelicula);
  }

  ngOnInit(): void {
  }

}
