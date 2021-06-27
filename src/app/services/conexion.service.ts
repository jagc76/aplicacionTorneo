import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(public http: HttpClient) { }

  myHttp = "http://127.0.0.1:80" // Dirección backend en localhost
  // myHttp = "https://irresolvable-escort.000webhostapp.com" // Dirección backend en hostingweb


  /* getAll(){
    return this.http.get(
        this.myHttp+"/consultarEquipos")
        .toPromise();
  } */

  /* SE USA PARA ENVIAR UN PARAMETRO DESDE LA INTERFAZ USANDO EN [(ngModel)]
  y guardarlo en una variable dependiendo su tipo debajo del constructor
  EN ESTE CASO SE ENVIO DESDE DEL TS DEL FRONTEND!!!*/
  consultarEquiposPorGrupo(letraGrupo: string) {
    return this.http.get(
      this.myHttp + "/consultarEquipos/" + letraGrupo)
      .toPromise();
  }

  consultarEncuentros(numeroDeEncuentros: number) {
    return this.http.get(
      this.myHttp + "/consultarEncuentros/" + numeroDeEncuentros)
      .toPromise();
  }

  /* addEquipos(){
    return this.http.post(
      this.myHttp+"/add", JSON.stringify(data))
      .toPromise();
  } */
}
