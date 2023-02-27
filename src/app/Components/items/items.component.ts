import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/Item';
import { updateService } from 'src/app/update.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  itemList!: Item[];
  @Output() itemDelete: EventEmitter<Item> = new EventEmitter();

  constructor(private service: updateService) {
    this.itemList = this.getList()
  }

  getList() {
    return this.service.getList()
  }

  onClick(item: Item) {
    const index = this.itemList.indexOf(item)
    console.log("delete", item, index)
    this.service.deleteItem(index)
    this.itemList = this.getList()
    console.log(this.itemList)
  }
}
