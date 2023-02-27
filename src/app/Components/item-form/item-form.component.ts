import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/Item';
import { updateService } from 'src/app/update.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  name = "";
  store = "";
  quantity = "";
  @Output() itemAdd: EventEmitter<Item> = new EventEmitter();

  constructor(private service: updateService) {

  }

  onSubmit() {
    const item = {
      name: this.name,
      store: this.store,
      quantity: this.quantity
    }
    this.service.addItem(item)

  }
}
