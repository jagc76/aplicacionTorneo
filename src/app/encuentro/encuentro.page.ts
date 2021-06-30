import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-encuentro',
  templateUrl: './encuentro.page.html',
  styleUrls: ['./encuentro.page.scss'],
})
export class EncuentroPage implements OnInit {

  codigoEncuentro: any;
  infoEncuentro: any;
  idjuez1: string;
  idjuez2: string;
  idjuez3: string;
  nombresDeJueces = [];
  ronda: number;

  constructor(private activatedRoute: ActivatedRoute,
    private conexion: ConexionService) { }

  // Se consulta la info del encuentro al cargar la interfaz
  ngOnInit() {
    this.codigoEncuentro = this.activatedRoute.snapshot.paramMap.get('codigoEncuentro');
    this.conexion.consultarInfoEncuentro(this.codigoEncuentro)
      .then(
        data => {
          this.infoEncuentro = data;
          if(this.infoEncuentro[0]['Cod_Encuentro'] < 48){
            this.ronda = 1;
          }else if(this.infoEncuentro[0]['Cod_Encuentro'] < 56){
            this.ronda = 2;
          } else if(this.infoEncuentro[0]['Cod_Encuentro'] < 60){
            this.ronda = 3;
          } else if(this.infoEncuentro[0]['Cod_Encuentro'] < 64){
            this.ronda = 4;
          } else if(this.infoEncuentro[0]['Cod_Encuentro'] < 68){
            this.ronda = 5;
          }
          this.idjuez1 = data[0]['Id_Juezuno'];
          this.idjuez2 = data[0]['Id_Juezdos'];
          this.idjuez3 = data[0]['Id_Jueztres'];

          this.conexion.consultarNombreDeJuez1(this.idjuez1)
            .then(
              nombre => {
                this.nombresDeJueces[0] = nombre[0]['Nombre'];
              }
            )
            .catch(
              error => {
                console.log("Error." + error);
              }
            )

          this.conexion.consultarNombreDeJuez2(this.idjuez2)
            .then(
              nombre => {
                this.nombresDeJueces[1] = nombre[0]['Nombre'];
              }
            )
            .catch(
              error => {
                console.log("Error." + error);
              }
            )

          this.conexion.consultarNombreDeJuez3(this.idjuez3)
            .then(
              nombre => {
                this.nombresDeJueces[2] = nombre[0]['Nombre'];
              }
            )
            .catch(
              error => {
                console.log("Error." + error);
              }
            )
        }
      )
      .catch(
        error => {
          console.log("Error." + error);
        }
      )
  }
}
