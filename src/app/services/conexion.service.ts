import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(public http: HttpClient) { }

  // myHttp = "http://127.0.0.1:80" // Dirección backend en localhost
  myHttp = "https://irresolvable-escort.000webhostapp.com" // Dirección backend en hostingweb


  getAll(){
    return this.http.get(
        this.myHttp+"/consultarEquipos")
        .toPromise();
  }
  /* addEquipos(){
    return this.http.post(
      this.myHttp+"/add", JSON.stringify(data))
      .toPromise();
  } */
}
