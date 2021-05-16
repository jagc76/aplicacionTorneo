import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-fase-grupos',
  templateUrl: './fase-grupos.page.html',
  styleUrls: ['./fase-grupos.page.scss'],
})
export class FaseGruposPage implements OnInit {

  equipos: any;
  constructor(private conexion: ConexionService) { }


  ngOnInit() {
    this.listar();
  }

  listar() {
    this.conexion.getAll()
      .then(
        data => {
          this.equipos = data;
        }
      )
      .catch(
        error => {
          console.log("Error." + error);
        }
      )
  }
}
