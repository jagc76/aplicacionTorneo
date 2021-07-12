import { Component, OnInit } from '@angular/core';
import {ConexionService} from 'src/app/services/conexion.service';
@Component({
  selector: 'app-jugadoras',
  templateUrl: './jugadoras.page.html',
  styleUrls: ['./jugadoras.page.scss'],
})
export class JugadorasPage implements OnInit {
  bddJugadora: any;
  bddPuntos: any;
  constructor(private conexion: ConexionService) { }

  ngOnInit() {
    this.consultarPosiciones();
  }

  consultarPosiciones(){
    this.conexion.consultarMejorJugadora()
    .then(
      data =>{
        this.bddJugadora = data;
        this.bddPuntos = data;
      }
    )
    .catch(
      error =>{
        console.log("Error: "+error);
      }
    )
  }

}
