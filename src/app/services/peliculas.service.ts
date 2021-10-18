import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '6f58e0546473c0ea19e53d559b7a573d';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  peli:any;
  peliculas: any;
  buscar: any;
  buscarR: any;

  constructor( private http: HttpClient) { }

  getPopulares(){
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
   }

  getPelicula(id: string){
    const url = `${ this.urlMoviedb }/movie/${ id }?&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
   }


  buscarPelicula( texto: string){

    const url = `${ this.urlMoviedb }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    //console.log(url);
    this.peliculas = this.http.jsonp(url, 'callback=JSONP_CALLBACK').subscribe(data=>{
      this.buscar = data;
      this.buscarR = this.buscar.results;
      // console.log(this.buscarR)
        });
    //console.log(this.peliculas);
        return this.buscarR;
   }

   getCartelera(){
    
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ ('0' + (desde.getMonth()+1)).slice(-2) }-${ ('0' + desde.getDate()).slice(-2) }`;
    let hastaStr = `${ hasta.getFullYear() }-${ ('0' + (hasta.getMonth()+1)).slice(-2) }-${ ('0' + hasta.getDate()).slice(-2) }`;

    // console.log(desdeStr);
    // console.log(hastaStr);

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr}&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
   }

   
}
