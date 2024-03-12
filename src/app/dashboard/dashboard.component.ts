import { Component } from '@angular/core';
import {AuthComponent} from "../auth/auth.component";
import {HomeComponent} from "../home/home.component";
import {AddUpdateItemComponent} from "../add-update-item/add-update-item.component";
import {Item} from "../models/item.model";
import {ItemService} from "../services/item.service";
import {ListItemsComponent} from "../list-items/list-items.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AuthComponent,
    HomeComponent,
    AddUpdateItemComponent,
    ListItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  item: Item = new Item("", "", "", "", "");

  constructor(private itemService: ItemService) {
    this.itemService.read();
  }

  onReceiveItemFromListItems(item: Item) {
    console.log("Am primit itemul:");
    console.log(item);
    // salvam itemul primit din list-items in clasa HomeComponent
    this.item = item;
  }
}
