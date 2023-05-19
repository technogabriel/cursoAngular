import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaServicioComponent } from './pages/prueba-servicio/prueba-servicio.component';

const routes: Routes = [
  {
    path: 'modulo-prueba-servicio',
    loadChildren: ()=> import('./modules/modulo-prueba-servicio/modulo-prueba-servicio.module').then(m => m.ModuloPruebaServicioModule)
  },
  {
    path:'prueba',
    component: PruebaServicioComponent
  },
  {
    path:'',
    redirectTo:'prueba',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
