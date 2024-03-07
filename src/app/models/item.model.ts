export class Item {

  private _id : string;
  private _title : string;
  private _description : string;
  private _imageUrl : string;
  private _price : string;


  constructor(id : string, title: string, description: string, imageUrl: string, price: string) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._imageUrl = imageUrl;
    this._price = price;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }
}
