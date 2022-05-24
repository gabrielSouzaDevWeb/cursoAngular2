import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  constructor() {}
  private list: Array<string> = ['x Bacon', 'feijao', 'ovo'];

  public foodList() {
    return this.list;
  }
}
