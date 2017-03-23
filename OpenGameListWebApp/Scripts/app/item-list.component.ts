import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    moduleId: module.id,
    selector: "item-list",
    templateUrl: "item-list.component.html",
    styleUrls: ['item-list.component.css']
})
export class ItemListComponent implements OnInit {
    selectedItem: Item;
    items: Item[];
    errorMessage: string;

    constructor(private itemService: ItemService)
    { }

    ngOnInit() {
        this.getLatest();
    }

    getLatest() {
        this.itemService.getLatest()
            .subscribe(
            latestItems => this.items = latestItems,
            error => this.errorMessage = <any>error
            );
    }

    onSelect(item: Item) {
        this.selectedItem = item;
        console.log("item with Id " + this.selectedItem.Id + " has been selected.");
    }
}