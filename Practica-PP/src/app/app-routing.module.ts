import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorPeliculaComponent } from './componentes/actor/actor-pelicula/actor-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/busqueda', pathMatch: 'full'
  },
  {
    path: 'busqueda', component: BusquedaComponent
  },
  {
    path: "actor",
    children: [
      {path: 'alta', component: ActorAltaComponent},
      {path: 'listado', component: ActorAltaComponent},
      {path: 'actorPelicula', component: ActorPeliculaComponent}
    ]
  },
  {
    path: "pelicula",
    children: [
      {path: 'alta', component: PeliculaAltaComponent},
      {path: 'listado', component: PeliculaListadoComponent}
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
