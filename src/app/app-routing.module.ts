import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PopularesComponent } from './components/populares/populares.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'populares', component: PopularesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
