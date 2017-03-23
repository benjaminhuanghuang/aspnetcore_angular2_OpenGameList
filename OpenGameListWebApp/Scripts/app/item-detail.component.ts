import { Component, Input } from "@angular/core";
import { Item } from "./item";

@Component({
    moduleId: module.id,
    selector: "item-detail",
    templateUrl: "item-detail.component.html",
    styleUrls: ['item-detail.component.css']
})
export class ItemDetailComponent {
    @Input("item") item: Item;
}