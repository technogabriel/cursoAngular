import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.scss']
})
export class ReactivoComponent implements OnInit {
  form: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.createForm();
    this.listenChanges();




  }

  save() {
    console.log(this.form);
    console.log(this.form.value)
    console.table(this.form.value)
  }

  listenChanges() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value.edad)
      if (value.edad >= 18 && !this.form.controls['drink'].enabled) {
        this.form.controls['drink'].enable();
        this.form.controls['drink'].setValidators([Validators.required]);
        this.form.controls['drink'].updateValueAndValidity();
      } else if (value.edad < 18 && this.form.controls['drink'].enabled) {
        this.form.controls['drink'].disable();
        this.form.controls['drink'].removeValidators([Validators.required]);
        this.form.controls['drink'].updateValueAndValidity();
      }
    })
  }

  createForm() {
    this.form = new FormGroup({
      nombre: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      apellido: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      edad: new FormControl<number>(null, [Validators.min(0), Validators.max(99), Validators.required]),
      drink: new FormControl<string>('', [Validators.minLength(2)])
    })
    this.form.controls['drink'].disable();
  }


}
