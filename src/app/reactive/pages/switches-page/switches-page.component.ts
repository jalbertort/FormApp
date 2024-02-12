import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent {

  myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  constructor( private fb: FormBuilder ) {}

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {

    switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return null;
  }

  //ngSubmit
  onSave(): void {
    if( this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    //Guardar formulario
    console.log(this.myForm.value);

    this.myForm.reset();
  }

}
