import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ItemService} from "../services/item.service";
import {Item} from "../models/item.model";


@Component({
  selector: 'app-add-update-item',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatCard,
        MatCardContent,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './add-update-item.component.html',
  styleUrl: './add-update-item.component.css'
})
export class AddUpdateItemComponent implements OnChanges{

  @Input("selectedItem") selectedItem: Item = new Item("", "", "", "", "");
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemService: ItemService) {
    this.itemForm = formBuilder.group({
      id: [""],
      title: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.itemService.read();
  }

  onSave(): void {
    if (this.itemForm.valid) {
      if (this.itemForm.value.id == "") {
        // daca formularul NU are id, atunci facem create
        this.itemService.create(this.itemForm.value).subscribe((response: any) => {
          console.log(response);
          // dupa fiecare actiune de create/ update/ delete, apelam read() pentru a actualiza informatiile din baza de date;
          this.itemService.read();
          this.resetForm();
        })
      } else {
        // daca formularul are id, atunci facem update
        this.itemService.update(this.itemForm.value).subscribe((response: any) => {
          console.log(response);
          // dupa fiecare actiune de create/ update/ delete, apelam read() pentru a actualiza informatiile din baza de date;
          this.itemService.read();
          this.resetForm();
        })
      }
    } else {
      alert("Formular invalid");
    }
  }

  // metoda ngOnChanges() din interfata OnChanges, se apeleaza atunci cand @Input definit mai sus isi schimba valoarea
  // ea se apeleaza automat. OBLIGATORIU TREBUIE sa implementam interfata OnChanges
  ngOnChanges(): void {
    console.log(this.selectedItem);
    this.itemForm = this.formBuilder.group({
      id: [this.selectedItem.id],
      title: [this.selectedItem.title, Validators.required],
      description: [this.selectedItem.description, Validators.required],
      imageUrl: [this.selectedItem.imageUrl, Validators.required],
      price: [this.selectedItem.price, Validators.required]
    });
  }

  resetForm() {
    this.itemForm = this.formBuilder.group({
      id: [""],
      title: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.selectedItem = new Item("", "", "", "", "");
  }

}
