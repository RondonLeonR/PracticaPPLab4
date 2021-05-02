import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/busqueda', pathMatch: 'full'
  },
  {
    path: 'busqueda', component: BusquedaComponent
  },
  {
    path: 'actorAlta', component: ActorAltaComponent
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
