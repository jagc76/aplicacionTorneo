import { stringify } from '@angular/compiler/src/util';
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
  finalista1: string;
  finalista2: string;
  finalista3: string;
  finalista4: string;
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
          this.finalista1 = this.equiposllave1[0]['Nombre_Equipo'];
          this.finalista2 = this.equiposllave1[1]['Nombre_Equipo'];
          this.finalista3 = this.equiposllave2[0]['Nombre_Equipo'];
          this.finalista4 = this.equiposllave2[1]['Nombre_Equipo'];
        }
      )
      .catch(
        error => {
          console.log("Error." + error);
        }
      )
  }

}
