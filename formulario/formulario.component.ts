import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  private buildForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      tipoServicio: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      Venta: new FormControl('', [Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      horas: new FormControl('', Validators.required)
    });

    this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingresa un email';
    }

    return this.email.hasError('email') ? 'Ingresa un email valido' : '';
  }
  horas: number[] = [
    8, 9, 10, 11,
    12, 13, 14, 15,
    16, 17

  ]
}



