import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent {

  myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  isValidField( field: string ): boolean | null {
    return this.validatorsService.isValidField( this.myForm, field )
  }

  getFieldError( field: string ): string | null {
    return this.validatorsService.getFieldError( this.myForm, field );
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
