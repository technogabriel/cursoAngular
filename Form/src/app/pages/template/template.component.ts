import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  user: User= new User();
  disableDrink : boolean = true;

  save(form : NgForm) {
    console.log(form.form)
  }

  changeAge(form: NgForm){
    if(this.user.edad >=18 && this.disableDrink){
        this.disableDrink = false;
        form.controls['drink'].setValidators([Validators.required])
        form.controls['drink'].updateValueAndValidity();
    } else  if(this.user.edad < 18 && !this.disableDrink) {
        this.disableDrink = true;
        form.controls['drink'].removeValidators([Validators.required]);
        form.controls['drink'].updateValueAndValidity();
    }
  }
}


class User {
  nombre : String;
  apellido : String;
  email: String;
  edad: number;
  drink: string;
}

