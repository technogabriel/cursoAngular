import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-modulo-prueba-servicio',
  templateUrl: './modulo-prueba-servicio.component.html',
  styleUrls: ['./modulo-prueba-servicio.component.scss']
})
export class ModuloPruebaServicioComponent implements OnInit{

  constructor(private testService : TestService){

  }

  ngOnInit(): void {
    console.log(this.testService.getDate());

  }

}
