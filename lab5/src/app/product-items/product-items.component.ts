import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
})
export class ProductItemsComponent implements OnInit {
  @Input() item = '';
  products = products;
  productsList = products;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(){
    if(this.item == '' || this.item == 'Все'){
      this.productsList = products;
      return
    }
    const filteredProducts = this.products.filter((product) => {
      return product.category == this.item
    })
    this.productsList = filteredProducts;
  }


  removeProduct(product: Product): void {
    let index = this.productsList.indexOf(product)
    this.productsList.splice(index,1);
  }

  toggleHeart(product: Product): void {
    if (!product.like) {
      product.likes += 1;
      product.like = !product.like;
    } else {
      product.likes -= 1;
      product.like = !product.like;
    }
  }

}
