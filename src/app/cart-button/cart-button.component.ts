import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {DialogCartComponent} from "../dialog-cart/dialog-cart.component";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
  counter: number = 0;

  constructor(private dialog: MatDialog, private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Array<any>) => {
      this.counter = items.length;
    });
  }

  openCartDialog() {
    const dialogRef = this.dialog.open(DialogCartComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result); //daca dorim sa efectuam actiuni dupa inchiderea dialogului
    });
  }
}
