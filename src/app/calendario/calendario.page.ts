import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  rangoInicial: number;
  seMostroEncuentros: boolean = false;

  constructor(private conexion: ConexionService,
    private router: Router) { }

  ngOnInit() {
  }

  //  SE OBTIENE LA RONDA SELECCIONADA Y SE CONSULTAN SUS ENCUENTROS
  obtenerOpcion(event: CustomEvent) {
    this.rondaSeleccionada = event.detail.value;
    if (this.rondaSeleccionada == 1) {
      this.rangoInicial = -1;
      this.numeroDeEncuentros = 48;
    } else if (this.rondaSeleccionada == 2) {
      this.rangoInicial = 47;
      this.numeroDeEncuentros = 56;
    } else if (this.rondaSeleccionada == 3) {
      this.rangoInicial = 55;
      this.numeroDeEncuentros = 60;
    } else if (this.rondaSeleccionada == 4) {
      this.rangoInicial = 59;
      this.numeroDeEncuentros = 62;
    } else if (this.rondaSeleccionada == 5) {
      this.rangoInicial = 61;
      this.numeroDeEncuentros = 64;
    }
    this.conexion.consultarEncuentros(this.numeroDeEncuentros, this.rangoInicial)
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
    this.seMostroEncuentros = true;
  }

  enviarInfoEncuentro(i) {
    this.router.navigate(['../encuentro', this.encuentros[i].Cod_Encuentro]);
  }

}
