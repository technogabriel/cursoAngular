import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloPruebaServicioComponent } from './modulo-prueba-servicio.component';
import { ModuloPruebaServicioRoutingModule } from './modulo-prueba-servicio-routing.module';
import { TestService } from 'src/app/services/test.service';



@NgModule({
  declarations: [
    ModuloPruebaServicioComponent
  ],
  imports: [
    CommonModule,
    ModuloPruebaServicioRoutingModule
  ],
  providers: [TestService]
})
export class ModuloPruebaServicioModule { }
