import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-semifinales',
  templateUrl: './semifinales.page.html',
  styleUrls: ['./semifinales.page.scss'],
})
export class SemifinalesPage implements OnInit {

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
    this.conexion.consultarEquiposDeSemifinales()
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
