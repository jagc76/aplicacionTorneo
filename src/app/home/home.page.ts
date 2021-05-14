import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private conexion: ConexionService) {}
  

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.conexion.getAll()
    .then(
      Data =>{
        this.bddEmpleado = data;
      }
    )

    .catch(
      error =>{
        console.log("Error."+error);
      }
    )
  }

}
