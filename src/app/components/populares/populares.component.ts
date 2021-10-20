import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  populares:any;
  popularesR:any;

  constructor(public _ps:PeliculasService,
    private route: ActivatedRoute,
    private router: Router) {
      this.getPopulares();
     }

  ngOnInit(): void {
  }

  getPopulares(){
    this._ps.getPopulares().subscribe(data=>{
      this.populares = data;
      this.popularesR = this.populares.results;
    });  
  }

}
