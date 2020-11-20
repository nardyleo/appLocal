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
<<<<<<< HEAD
    path: 'editar/:idLocal',
    loadChildren: () => import('./editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
  },
  {
    path: ':idLocal',
    loadChildren: () => import('./oferecer-reservas/oferecer-reservas.module').then( m => m.OferecerReservasPageModule)
=======
    path: 'editar-oferta',
    loadChildren: () => import('./editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
  },
  {
    path: 'ofertas-reserva',
    loadChildren: () => import('./ofertas-reserva/ofertas-reserva.module').then( m => m.OfertasReservaPageModule)
>>>>>>> 37fc9f2f93fe59433891b7ff1d06d9307867c687
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasPageRoutingModule {}
