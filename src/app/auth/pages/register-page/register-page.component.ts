import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';

import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  myform: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern ) ]],
    email: [ '', [ Validators.required ], [ this.emailValidator ]],
    user: [ '', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo( 'password', 'password2' )
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField( field: string): boolean | null {
    return this.validatorsService.isValidField( this.myform, field );
  }

  onSugmit() {

    if( !this.myform.valid ) {
      this.myform.markAllAsTouched();
      return;
    }

    console.log(this.myform.value);


  }

 }
