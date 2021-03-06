import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { MatCardModule } from '@angular/material/Card';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { PopularesComponent } from './components/populares/populares.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    NavbarComponent,
    DemoComponent,
    HomeComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    BuscarComponent,
    CarteleraComponent,
    PopularesComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule ,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    // MatCardModule,
    NavbarModule, 
    WavesModule, 
    ButtonsModule 
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

