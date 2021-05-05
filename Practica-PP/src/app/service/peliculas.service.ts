import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Pelicula } from '../clases/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  rutaDeLaColeccionPeliculas = '/peliculas';
  referenciaAlaColeccionPelicula: AngularFirestoreCollection<Pelicula>;
  peliculas: Observable<any[]>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccionPelicula = bd.collection(this.rutaDeLaColeccionPeliculas);

    this.peliculas = this.referenciaAlaColeccionPelicula.valueChanges(this.rutaDeLaColeccionPeliculas);
  }

  ///PELICULAS

  public CrearPelicula(pelicula: Pelicula): any {
    return this.referenciaAlaColeccionPelicula.add({ ...pelicula });
  }
  public TraerPeliculas() {
    return this.referenciaAlaColeccionPelicula;
  }

  public getAllMovies() {
    return this.peliculas;
  }
}
