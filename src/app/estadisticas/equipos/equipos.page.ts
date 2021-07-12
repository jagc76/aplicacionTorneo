import { Component, OnInit } from '@angular/core';
import {ConexionService} from 'src/app/services/conexion.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {
  bddEquipo: any;
  bddPuntoEquipo: any;

  constructor(private conexion: ConexionService) { }

  ngOnInit() {
    this.consultarPosicionesEquipo();
  }
  consultarPosicionesEquipo(){
    this.conexion.consultarMejorEquipo()
    .then(
      data =>{
        this.bddEquipo = data;
        this.bddPuntoEquipo = data;
      }
    )
    .catch(
      error =>{
        console.log("Error: "+error);
      }
    )
  }

}
