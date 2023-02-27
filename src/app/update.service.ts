import { Injectable } from "@angular/core";

interface Item {
    name: string;
    store: string;
    quantity: string;
}

@Injectable({
    providedIn: "root"
})
export class updateService {

    itemList: Item[] = []

    constructor() {
        const localItem = localStorage.getItem('ItemList')
        if (localItem == null) {
            this.itemList = []
        }
        else {
            this.itemList = JSON.parse(localItem)
        }
    }

    addItem(item: Item) {
        console.log(item)
        this.itemList.push(item)
        this.storageset()
    }

    deleteItem(index: number) {
        console.log(index)
        this.itemList.splice(index, 1)
        this.storageset()
    }

    getList() {
        return this.itemList
    }

    storageset() {
        localStorage.setItem('ItemList', JSON.stringify(this.itemList))
    }

}