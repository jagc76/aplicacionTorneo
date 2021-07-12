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

  consultarInfoEncuentro(codigoEncuentro: any) {
    return this.http.get(
      this.myHttp + "/consultarInfoEncuentro/" + codigoEncuentro)
      .toPromise();
  }

  consultarNombreDeJuez1(idjuez1: string) {
    return this.http.get(
      this.myHttp + "/consultarNombreDeJuez1/" + idjuez1)
      .toPromise();
  }

  consultarNombreDeJuez2(idjuez2: string) {
    return this.http.get(
      this.myHttp + "/consultarNombreDeJuez2/" + idjuez2)
      .toPromise();
  }

  consultarNombreDeJuez3(idjuez3: string) {
    return this.http.get(
      this.myHttp + "/consultarNombreDeJuez3/" + idjuez3)
      .toPromise();
  }

  consultarRondaActual() {
    return this.http.get(
      this.myHttp + "/consultarRondaActual")
      .toPromise();
  }

  consultarEquiposDeOctavos() {
    return this.http.get(
      this.myHttp + "/consultarEquiposDeOctavos")
      .toPromise();
  }

  consultarEquiposDeCuartos() {
    return this.http.get(
      this.myHttp + "/consultarEquiposDeCuartos")
      .toPromise();
  }

  consultarEquiposDeSemifinales() {
    return this.http.get(
      this.myHttp + "/consultarEquiposDeSemifinales")
      .toPromise();
  }

  consultarEquiposDeFinales() {
    return this.http.get(
      this.myHttp + "/consultarEquiposDeFinales")
      .toPromise();
  }

  consultarMejorJugadora() {
    return this.http.get(
      this.myHttp + "/consultarMejorJugadora")
      .toPromise();
  }

  consultarMejorEquipo() {
    return this.http.get(
      this.myHttp + "/consultarMejorEquipo")
      .toPromise();
  }

  /* addEquipos(){
    return this.http.post(
      this.myHttp+"/add", JSON.stringify(data))
      .toPromise();
  } */
}
