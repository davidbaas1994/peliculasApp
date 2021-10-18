import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'
import { PeliculaImagenPipe} from '../../pipes/pelicula-imagen.pipe'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  carteleraR:any;
  populares:any;
  popularesR:any;

  constructor(public _ps:PeliculasService) { 

    this._ps.getCartelera().subscribe(data=>{
        this.cartelera = data;
        this.carteleraR = this.cartelera.results;
        // console.log(this.carteleraR)

  });

  this._ps.getPopulares().subscribe(data=>{
    this.populares = data;
    this.popularesR = this.populares.results;
});
  }

  ngOnInit(): void {
  }

}
