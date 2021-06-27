import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  rondaSeleccionada: number;
  encuentros: any;
  numeroDeEncuentros: number;

  constructor(private conexion: ConexionService) { }

  ngOnInit() {
  }

  //  SE OBTIENE LA RONDA SELECCIONADA Y SE CONSULTAN SUS ENCUENTROS
  obtenerOpcion(event: CustomEvent) {
    this.rondaSeleccionada = event.detail.value;
    if (this.rondaSeleccionada == 1) {
      this.numeroDeEncuentros = 48;
    }
    this.conexion.consultarEncuentros(this.numeroDeEncuentros)
      .then(
        data => {
          this.encuentros = data;
        }
      )
      .catch(
        error => {
          console.log("Error." + error);
        }
      )
  }

}
