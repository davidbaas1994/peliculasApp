import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  cartelera:any;
  carteleraR:any;

  constructor(public _ps:PeliculasService,
    private route: ActivatedRoute,
    private router: Router) {
      this.getCartelera();
     }

  ngOnInit(): void {
  }

  getCartelera(){
    this._ps.getCartelera().subscribe(data=>{
      this.cartelera = data;
      this.carteleraR = this.cartelera.results;
  });
  
  }

}
