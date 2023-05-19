import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestStatusService } from 'src/app/services/test-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() saludo : string;
  form : FormGroup;

  constructor(private testStatus: TestStatusService){

  }
  ngOnInit(): void {
    this.createForm();
    this.getValueChanges();
  }

  enviarMensaje(){
    this.testStatus.sendMessage.emit(this.form.value.query);
    //this.form.reset()
  }

  getValueChanges(){
    this.form.valueChanges.subscribe((value)=>{
      this.enviarMensaje()
    })
  }

  createForm(){
    this.form = new FormGroup({
      query: new FormControl('', [Validators.minLength(3)]),


    })
  }

}
