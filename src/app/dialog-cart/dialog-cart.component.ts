import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-dialog-cart',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.css']
})
export class DialogCartComponent {

  items: Array<any> = [];

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Array<any>) => {
      this.items = items;
    });
  }

  onDeleteCart(item: any): void {
    this.cartService.removeFromCart(item);
  }

  onBuy(): void {
    //cand se va face logica pt back-end, de aici se va da comanda de creare cart
  }
}
