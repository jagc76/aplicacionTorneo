import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(public http: HttpClient) { }

  myHttp = "http://127.0.0.1:80" //Dirección backend

  getAll(){
    return this.http.get(
        this.myHttp+"/consultarEquipos")
        .toPromise();
  }
}
