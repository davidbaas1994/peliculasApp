import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  data: string;
  id: string='';
  pag: string='';

  constructor(public _ps:PeliculasService,
    private route: ActivatedRoute,
    private router: Router) { 
      
      this.id = this.route.snapshot.paramMap.get('id');
      this.pag = this.route.snapshot.paramMap.get('pag');
      this._ps.getPelicula(this.id).subscribe( 
        pelicula=>{
          this.pelicula = pelicula;
          // console.log(this.pelicula);
      });
      
    }


  ngOnInit(): void {
  }

}
