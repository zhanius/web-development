import { Component, Input, OnInit, SimpleChanges,EventEmitter,Output } from '@angular/core';
import { Category, categories } from '../categories';
import { ProductItemsComponent } from '../product-items/product-items.component';
import { Product, products } from '../products';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<string>();

  categories = categories;
  
  constructor() {}

  ngOnInit(): void {}


  setCategory(category: string){
    this.categorySelected.emit(category);
  }

}
