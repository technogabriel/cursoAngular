import { Component, OnInit } from '@angular/core';
import { TestStatusService } from 'src/app/services/test-status.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-prueba-servicio',
  templateUrl: './prueba-servicio.component.html',
  styleUrls: ['./prueba-servicio.component.scss'],
  providers: [TestService]
})
export class PruebaServicioComponent  implements OnInit{
  saludo: string;

  constructor(private testService : TestService,
              private testStatus : TestStatusService){

  }

  ngOnInit(): void {
    console.log(this.testService.getDate());
    this.testStatus.sendMessage.subscribe((message : string )=>{
      this.saludo = message;
    })

  }

}
