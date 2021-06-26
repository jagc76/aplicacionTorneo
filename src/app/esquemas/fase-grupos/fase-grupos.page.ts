import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-fase-grupos',
  templateUrl: './fase-grupos.page.html',
  styleUrls: ['./fase-grupos.page.scss'],
})
export class FaseGruposPage implements OnInit {

  letrasGrupo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  equiposGrupoA: any;
  equiposGrupoB: any;
  equiposGrupoC: any;
  equiposGrupoD: any;
  equiposGrupoE: any;
  equiposGrupoF: any;
  equiposGrupoG: any;
  equiposGrupoH: any;
  constructor(private conexion: ConexionService) { }


  ngOnInit() {
    for(let i = 0; i < 8; i++) {
      this.listar(i);
    }
  }

  listar(i) {
    this.conexion.consultarEquiposPorGrupo(this.letrasGrupo[i])
      .then(
        data => {
            if (i == 0) {
              this.equiposGrupoA = data;
            } else if (i == 1) {
              this.equiposGrupoB = data;
            } else if (i == 2) {
              this.equiposGrupoC = data;
            } else if (i == 3) {
              this.equiposGrupoD = data;
            } else if (i == 4) {
              this.equiposGrupoE = data;
            } else if (i == 5) {
              this.equiposGrupoF = data;
            } else if (i == 6) {
              this.equiposGrupoG = data;
            } else if (i == 7) {
              this.equiposGrupoH = data;
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
