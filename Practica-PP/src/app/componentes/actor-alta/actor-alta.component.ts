import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  pais = {"pais":"nada","capital":"","path":""};

  ///validaciones
  public forma : FormGroup;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['',[Validators.required, this.validadorEspacio ]],
      'apellido': ['',[Validators.required, this.validadorEspacio ]],
      'edad': ['',[Validators.required, Validators.min(10), Validators.max(100)]],
      'email': ['',[Validators.required, this.validadorEspacio ]],
      'direccion': ['',[Validators.required]],
      //'pais': [this.paisElegido], //VER COMO SETEAR EL PAIS
      'pais' : '',
      'terminos': ['',Validators.required]
    })
  }

  paisElegido(pais):string{
    this.pais.pais = pais.name;
    this.pais.capital = pais.capital;
    this.pais.path = pais.flag;
    return this.pais.pais;
  }


  private validadorEspacio(control:AbstractControl):null | object{
    let valor = <string>control.value;
    const tieneEspacios = valor.includes(' ');
    if(tieneEspacios){
      return { contiene:true};
    }
    else{
      return null;
    }
  }



  enviar(){
    ///No creo que este bien setearlo aca el pais
    this.forma.value.pais = this.pais.pais;
    console.info("Objeto formulario", this.forma.value);
    console.info("Falta subir a firebase, supongo");
  }



  

  
}
