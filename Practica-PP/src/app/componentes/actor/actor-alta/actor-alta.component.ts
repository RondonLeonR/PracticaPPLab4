import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';

import {Actor} from '../../../clases/actor';
import {AuthService} from '../../../service/auth.service';

import { Router} from '@angular/router';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {


  ///validaciones
  public forma : FormGroup;

  public actor: Actor;
  public paisRetorno : Pais;
  public paisMostrar: Pais;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router:Router
  ) {
    this.actor = new Actor();
    this.paisMostrar = new Pais();
   }

  ngOnInit(): void {
    //this.paisRetorno.nombre = "nada";
    /*this.forma = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required ]],
      'edad': ['',[Validators.required, Validators.min(10), Validators.max(100)]],
      'sexo': ['',[Validators.required]]
    })*/
    this.forma = new FormGroup({
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'edad': new FormControl(''),
      'dni': new FormControl(''),
      'sexo': new FormControl(''),
      'email': new FormControl(''),
      'nacionalidad': new FormControl(''),
      'pais': new FormControl('')
    });
    this.forma = this.fb.group({

      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      'sexo': ['', Validators.required]

    })
  }



  paisElegido(pais):void{
    //this.pais.pais = pais.name;
    //this.pais.capital = pais.capital;
    //this.pais.path = pais.flag;
    this.paisMostrar.nombre = pais.name;
    this.paisMostrar.capital = pais.capital;
    this.paisMostrar.bandera = pais.flag;
    this.paisMostrar.population = pais.population;
    
    this.paisRetorno = this.paisMostrar;
    this.actor.nacionalidad = pais;
    //console.log(this.actor);
  }


  enviar(){
    console.log(this.actor);

    ///enviar a firebase
    this.service.CrearActor(this.actor).then(()=>{
      console.log("Actor enviado");
    });
    this.router.navigateByUrl("");
  }



  

  
}
