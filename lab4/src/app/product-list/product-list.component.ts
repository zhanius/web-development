import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(name: string, url: string) {
    window.location.href = `https://t.me/share/url?url=Купи ${name} по очень выгодной цене!&text=${url}`
  }
}


