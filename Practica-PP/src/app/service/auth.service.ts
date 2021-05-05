import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Pelicula } from '../clases/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rutaDeLaColeccion = '/actores';
 
  referenciaAlaColeccion: AngularFirestoreCollection<Actor>;
 

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    
  }

  public CrearActor(actor: Actor): any {
    return this.referenciaAlaColeccion.add({ ...actor });
  }

  public TraerActores() {

    return this.referenciaAlaColeccion;

  }
  public TraerUnActor(actor: Actor) {
    const found = this.bd.collection(this.rutaDeLaColeccion, ref =>
      ref.where("nombre", "==", actor.nombre).where("apellido", "==", actor.apellido).where("edad", "==", actor.edad).where("sexo", "==", actor.sexo).where("nacionalidad", "==", actor.nacionalidad));

    return found;
  }
  
  
}
