import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


export class  Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  }
}

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
  selector: 'app-product-image',
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent {
  @HostBinding('class') classes = 'ui small image';
  @Input() product: Product;
}


/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
@Component({
  selector: 'app-product-department',
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
export class ProductDepartmentComponent {
  @Input()  product: Product;
}

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
@Component({
  selector: 'app-price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;
}

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'app-product-row',
  template: `
  <app-product-image [product]="product"></app-product-image>
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <app-product-department [product]="product"></app-product-department>
    </div>
  </div>
  <app-price-display [price]="product.price"></app-price-display>
  `
})
export class ProductRowComponent {
  @HostBinding('class') classes = 'item';
  @Input() product: Product;
}

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 * 在视图中,使用(output)='action'语法来监听事件
 * EventEmitter事件触发器
 * subscribe订阅
 *  this.productSelected = new EventEmitter();
 *  把一个eventemitter赋值给一个输出时,angular会自动帮我们订阅事件
 */

@Component({
  selector: 'app-products-list',
  template: `
  <div class="ui items">
    <app-product-row
      *ngFor="let myProduct of productList"
      [product]="myProduct"
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </app-product-row>
  </div>
  `
})
export class ProductsListComponent {
  /**
   * @input productList - the Product[] passed to us
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  @Output() productSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   *             the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }
  // productSelected赋值为一个事件触发器
  // productSelected.emit时触发事件
  // app-inventory-app中监听这个事件
  clicked(product: Product): void {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}

/**
 * @InventoryApp: the top-level component for our application
 * productSelected事件触发的时候执行productWasSelected方法
 * $event参数根据productSelected的定义为当前的Product
 */
@Component({
  selector: 'app-inventory-app',
  template: `
  <div class="inventory-app">
    <app-products-list
      [productList]="products"
      (productSelected)="productWasSelected($event)">
    </app-products-list>
  </div>
  `
})
  // []传递输入 ()处理输出
export class InventoryAppComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }
  ngOnInit() {
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}

@NgModule({
  declarations: [
    InventoryAppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  exports: [
    InventoryAppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class InventoryAppModule {}
