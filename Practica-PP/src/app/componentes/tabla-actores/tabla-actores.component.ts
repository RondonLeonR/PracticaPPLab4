import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  listadoActores : Observable<any[]>;

  @Input()  listadoActoresInput:any;

  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor( service: AuthService) {
    this.listadoActores = null;
    this.listadoActores = service.TraerActores().valueChanges();
  }

  ngOnInit(): void {
  }

  detalles(parametroActor)
  {
    this.actorSeleccionado.emit(parametroActor);
  }

}
