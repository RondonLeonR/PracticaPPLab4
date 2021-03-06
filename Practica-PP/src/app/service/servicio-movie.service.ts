import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioMovieService {

  constructor(private http:HttpClient) { }


  public getPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
