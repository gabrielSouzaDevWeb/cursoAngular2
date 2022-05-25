import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['x Bacon', 'feijao', 'ovo'];
  public emitEvent = new EventEmitter();
  constructor() {}

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }

  public foodList() {
    return this.list;
  }
  public foodListAdd(value: string) {
    this.list.push(value);
  }
  public foodListRemove(value: string) {
    this.list = this.list.filter((food) => {
      return food != value;
    });
  }
}
