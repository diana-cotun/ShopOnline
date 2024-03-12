import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemService} from "../services/item.service";
import {ListItemsComponent} from "../list-items/list-items.component";
import {Item} from "../models/item.model";
import {AddUpdateItemComponent} from "../add-update-item/add-update-item.component";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {CartButtonComponent} from "../cart-button/cart-button.component";

@Component({
  selector: 'java64-home',
  standalone: true,
  imports: [
    // MatCard,
    // MatCardContent
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButton, ReactiveFormsModule, ListItemsComponent, AddUpdateItemComponent, MatDrawer, MatDrawerContainer, MatToolbar, MatIconButton, CartButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private itemService: ItemService, private router: Router) {
    this.itemService.read();
  }

  onDashboard() {
    this.router.navigate(["/", "admin"])
  }

  onLogout() {
    this.router.navigate(["/", "auth"])
  }

  onHome() {
    this.router.navigate(["/", "home"])
  }


}
