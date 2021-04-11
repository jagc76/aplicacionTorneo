import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasPage } from './estadisticas.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'equipos',
    pathMatch: 'full',
  },
  {
    path: '',
    component: EstadisticasPage,
    children: [
      {
        path: '',
        children: [
          {
            path: 'equipos',
            loadChildren: () =>
              import('./equipos/equipos.module').then(
                (m) => m.EquiposPageModule
              ),
          },
          {
            path: 'jugadoras',
            loadChildren: () =>
              import('./jugadoras/jugadoras.module').then(
                (m) => m.JugadorasPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasPageRoutingModule {}
