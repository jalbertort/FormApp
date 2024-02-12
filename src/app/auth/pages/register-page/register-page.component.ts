import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  myform: FormGroup = this.fb.group({
    name: [ '', [ Validators.required ]],
    email: [ '', [ Validators.required, Validators.email ]],
    user: [ '', [ Validators.required, cantBeStrider ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [Validators.required ]],
  });

  constructor( private fb: FormBuilder) {}

  isVAlidField( field: string): boolean | null {
    return this.myform.controls[field].errors
      && this.myform.controls[field].touched
  }

  onSugmit() {

    if( !this.myform.valid ) {
      this.myform.markAllAsTouched();
      return;
    }

  }

 }
