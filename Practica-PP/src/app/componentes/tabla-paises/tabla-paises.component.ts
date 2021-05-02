import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {ServicioMovieService} from '../../service/servicio-movie.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  listadoPaises: any;
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  constructor(private paisesApi:ServicioMovieService) { }

  ngOnInit(): void {
    this.paisesApi.getPaises().subscribe(data =>{
      //console.log(data);
      this.listadoPaises = data;
    });
  }


  PaisSeleccionado(item){
    //console.log(item);
    this.paisSeleccionado.emit(item);

  }

}
