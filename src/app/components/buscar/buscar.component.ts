import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:string;
  buscarTxt: string;

  constructor(public _ps:PeliculasService,
    private route: ActivatedRoute,
    private router: Router) { 
      
      this.buscarTxt = this.route.snapshot.paramMap.get('texto');
      if(this.buscarTxt){
        // this.reloadComponent();
        this.buscar = this.buscarTxt; 
        this.buscarPelicula();
        // location.reload();
        // this.reloadComponent();
        
      }
      //console.log(this.buscarTxt);
    }

  ngOnInit(): void {
    
  }

  buscarPelicula(){
    // this.ngOnInit();

    if(this.buscar.length==0){
      return;
    }
    this._ps.buscarPelicula(this.buscar);
    // this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
