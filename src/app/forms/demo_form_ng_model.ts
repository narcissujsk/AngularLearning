import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'demo-form-ng-model',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: with ng-model</h2>

    <div class="ui info message">
      The product name is: {{productName}}
      <br/>
      The product2 name is: {{productName2}}
    </div>

    <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field">
        <label for="productNameInput">Product Name</label>
        <input type="text"
               id="productNameInput"
               placeholder="Product Name"
               [formControl]="myForm.get('productName')"
               [(ngModel)]="productName">
      </div>
      <div class="field">
        <label for="productNameInput2">Product Name2</label>
        <input type="text"
               id="productNameInput2"
               placeholder="Product Name2"
               [formControl]="myForm.get('productName2')"
               [(ngModel)]="productName2">
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>
      <button type="submit" class="ui button">Submit</button>
    </form>

  </div>
  `
})
export class DemoFormNgModel {
  myForm: FormGroup;
  productName: string;
  productName2: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName':  ['', Validators.required],
      'productName2':  ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    //alert(this.myForm.getRawValue());
    console.log('you submitted value: ', value);
  }
}
