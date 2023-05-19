import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuloPruebaServicioComponent } from './modulo-prueba-servicio.component';

const routes: Routes = [
  {
    path:'',
    component: ModuloPruebaServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPruebaServicioRoutingModule { }
