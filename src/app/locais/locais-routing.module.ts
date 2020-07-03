import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaisPage } from './locais.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LocaisPage
  },
  {
    path: 'descobrir',
    loadChildren: () => import('./descobrir/descobrir.module').then( m => m.DescobrirPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaisPageRoutingModule {}
