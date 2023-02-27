import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Item-app"

  // additem(item: Item) {
  //   console.log("parent", item);
  //   this.itemList.push(item);
  //   //console.log(this.itemList)
  // }
  // removeitem(item: Item) {
  //   console.log(item)
  //   const i = this.itemList.indexOf(item)
  //   this.itemList.splice(i, 1)
  // }
}
