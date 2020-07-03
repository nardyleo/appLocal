import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasPage } from './ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasPage
  },
  {
    path: 'nova-oferta',
    loadChildren: () => import('./nova-oferta/nova-oferta.module').then( m => m.NovaOfertaPageModule)
  },
  {
    path: 'editar-oferta',
    loadChildren: () => import('./editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
  },
  {
    path: 'ofertas-reserva',
    loadChildren: () => import('./ofertas-reserva/ofertas-reserva.module').then( m => m.OfertasReservaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasPageRoutingModule {}
