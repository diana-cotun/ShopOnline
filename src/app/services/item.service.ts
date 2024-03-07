import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = "https://api.codebyte-software.com:2323/api/items";
  // itemObservable = canal youtube la care ne abonam, el contine lista de obiecte actualizata
  private itemObservable = new BehaviorSubject<Array<Item>>([])

  constructor(private httpClient : HttpClient) { }

  public create(item : any) {
    const body = {
      title : item.title,
      description : item.description,
      imageUrl : item.imageUrl,
      price : item.price
    };
    return this.httpClient.post(this.apiUrl, body);
  }
  public read() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      console.log(response);
      // response.data = lista de items din baza de date;
      // .next() = este metoda care actualizeaza "canalul de youtube de mai sus"
      this.itemObservable.next(response.data);
    });
  }
  public update(item : any) {}

  public delete(id : string) {
    return this.httpClient.delete(this.apiUrl + "/" + id);
  }

  public getItemsList() {
    // asObservable() = ne permite sa ne abonam la obiectul itemObservable;
    return this.itemObservable.asObservable();
  }


}
