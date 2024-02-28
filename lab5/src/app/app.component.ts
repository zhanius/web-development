import { Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductItemsComponent } from './product-items/product-items.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Store';
  currentCategory = 'Все';
  showItem(name: string){
    this.currentCategory = name;
  }
}
