import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  buscarTxt: string = '';
  buscar: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  buscarPelicula(){
  if(this.buscarTxt.length == 0 ){
    return;
  }
  else{
    // console.log(this.buscarTxt);
    // this.buscarTxt = this.route.snapshot.paramMap.get('texto');
    this.router.navigate(['/buscar', this.buscarTxt]);
    
  }
  }

}
