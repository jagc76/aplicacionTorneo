import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-octavos',
  templateUrl: './octavos.page.html',
  styleUrls: ['./octavos.page.scss'],
})
export class OctavosPage implements OnInit {

  rondaActual: number;
  equiposClasificados: any;
  equiposllave1 = [];
  equiposllave2 = [];
  equiposllave3 = [];
  equiposllave4 = [];
  equiposllave5 = [];
  equiposllave6 = [];
  equiposllave7 = [];
  equiposllave8 = [];
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
    this.conexion.consultarEquiposDeOctavos()
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
            } else if (i == 4) {
              this.equiposllave3[0] = data[i];
              this.equiposllave3[1] = data[i + 1];
            } else if (i == 6) {
              this.equiposllave4[0] = data[i];
              this.equiposllave4[1] = data[i + 1];
            } else if (i == 8) {
              this.equiposllave5[0] = data[i];
              this.equiposllave5[1] = data[i + 1];
            } else if (i == 10) {
              this.equiposllave6[0] = data[i];
              this.equiposllave6[1] = data[i + 1];
            } else if (i == 12) {
              this.equiposllave7[0] = data[i];
              this.equiposllave7[1] = data[i + 1];
            } else if (i == 14) {
              this.equiposllave8[0] = data[i];
              this.equiposllave8[1] = data[i + 1];
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
