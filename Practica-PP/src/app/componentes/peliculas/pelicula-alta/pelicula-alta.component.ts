import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { AuthService} from '../../../service/auth.service';
import { PeliculasService} from '../../../service/peliculas.service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  actoresAgregados = false;

  listaActores: Array<Actor> = new Array<Actor>();
  public unaPelicula: Pelicula;

  public forma : FormGroup;

  constructor( 
    private fb: FormBuilder,
    private service: AuthService,
    private serPeli: PeliculasService,
    private router:Router
  ) { 
    this.unaPelicula = new Pelicula();
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['',[Validators.required]],
      'tipo': ['',[Validators.required]],
      'fechaDeEstreno': ['',Validators.required],
      'cantidadDePublico': ['',Validators.required, Validators.min(1), Validators.max(10000)],
      'imagen': ['',Validators.required],

    })
  }

  enviar(){
    ///Seteo las variables de la pelicula
    this.unaPelicula.nombre = this.forma.value.nombre;
    this.unaPelicula.cantidadDePublico = this.forma.value.cantidadDePublico;
    this.unaPelicula.fechaDeEstreno = this.forma.value.fechaDeEstreno;
    this.unaPelicula.tipo = this.forma.value.tipo;
    this.unaPelicula.FotoDeLaPelicula = this.forma.value.imagen;

    ///
    this.serPeli.CrearPelicula(this.unaPelicula);

    this.forma.reset();
    this.listaActores = new Array<Actor>();

    this.router.navigateByUrl("");
  }


  agregarActor(unActor){
    if(this.listaActores.includes(unActor) === false){
      this.listaActores.push(unActor);
    }
    else{
      console.log("Ya esta agregado!");
    }

    this.unaPelicula.actores = this.listaActores;
    console.log(this.listaActores);

    this.actoresAgregados = true;
  }
}
