import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';
import { ActorPeliculaComponent } from './componentes/actor/actor-pelicula/actor-pelicula.component';
import { ListadoPeliculasActoresComponent } from './componentes/listado-peliculas-actores/listado-peliculas-actores.component';
import { ListadoPaisesActoresComponent } from './componentes/listado-paises-actores/listado-paises-actores.component';
import { DetallesActoresComponent } from './componentes/detalles-actores/detalles-actores.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActoresComponent,
    ActorPeliculaComponent,
    ListadoPeliculasActoresComponent,
    ListadoPaisesActoresComponent,
    DetallesActoresComponent,
    TablaActorComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
