import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';

import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  myform: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern ) ]],
    email: [ '', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ]],
    user: [ '', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  isValidField( field: string): boolean | null {
    return this.validatorsService.isValidField( this.myform, field );
  }

  onSugmit() {

    if( !this.myform.valid ) {
      this.myform.markAllAsTouched();
      return;
    }

  }

 }
