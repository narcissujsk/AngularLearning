import { Component } from '@angular/core';

@Component({
  selector: 'demo-form-sku',
  //NgForm的选择器包含form标签,导入FormsModule时,NgForm自动附加到视图中所有form上
  //#f="ngForm" 在当前视图创建局部变量 ngForm是FormGroup
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku</h2>
    <div> {{ng001}}</div>
    <div> {{f}}</div>
    <form #f="ngForm"
          (ngSubmit)="onSubmit(f.value)"
          class="ui form">

      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               name="sku" [(ngModel)]="ng001"
               >
      </div>

      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormSku {
  ng001: string;
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
