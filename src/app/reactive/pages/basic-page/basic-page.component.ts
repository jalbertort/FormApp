import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 8
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html'
})
export class BasicPageComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl( '' ),
  //   price: new FormControl( 0 ),
  //   inStorage: new FormControl( 0 ),
  // })

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ 0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [ 0, [ Validators.required, Validators.min(0) ] ],
  })

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm.reset(  rtx5090 );
  }

  onSave(): void {

    if( this.myForm.invalid ) return;

    console.log(this.myForm.value);

    this.myForm.reset({ price:0, inStorage:0 });

  }

}
