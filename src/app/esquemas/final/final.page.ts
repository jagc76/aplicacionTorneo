import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  rondaActual: number;
  equiposClasificados: any;
  equiposllave1 = [];
  equiposllave2 = [];
  constructor(private conexion: ConexionService) { }

  ngOnInit() {
    this.consultarRondaActual();
    this.listar();
  }

  consultarRondaActual() {
    // SE CONSULTA LA RONDA ACTUAL DEL TORNEO
    this.conexion.consultarRondaActual().then(data => {
      this.rondaActual = data[0]['rondaActual'];
    })
      .catch(
        error => {
          console.log("Error." + error);
        }
      )
  }

  listar() {
    this.conexion.consultarEquiposDeFinales()
      .then(
        data => {
          this.equiposClasificados = data;
          for (let i = 0; i < 16; i++) {
            if (i == 0) {
              this.equiposllave1[0] = data[i];
              this.equiposllave1[1] = data[i + 1];
            } else if (i == 2) {
              this.equiposllave2[0] = data[i];
              this.equiposllave2[1] = data[i + 1];
            }
          }
        }
      )
      .catch(
        error => {
          console.log("Error." + error);
        }
      )
  }

}
