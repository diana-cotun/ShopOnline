import { Component } from '@angular/core';
import {Item} from "../models/item.model";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MatButton
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  itemsList : Array<Item> = [];

  constructor(private itemService : ItemService) {
    this.itemService.getItemsList().subscribe((itemsListFromService : Array<Item>) => {
      this.itemsList = itemsListFromService;
    })
    console.log(this.itemsList);
  }

  onDelete(item : Item) {
    console.log(item);
    this.itemService.delete(item.id).subscribe((response : any) => {
      console.log(response);
      this.itemService.read();
    })
  }

}
