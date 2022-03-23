import { IFoodList } from './../interfaces/food-list.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private repoListFood: string = 'http://localhost:3000/';
  //
  constructor(private http: HttpClient) {}
  public getFoodList(): Observable<Array<IFoodList>> {
    return this.http
      .get<Array<IFoodList>>(`${this.repoListFood}list-food`)
      .pipe(
        res => res,
        error => error
      );
  }

  /*return this.http
      .post<Array<IFoodList>>(`${this.repoListFood}list-food`, {
        nome: value
      })
      .pipe(
        res => res,
        error => error
      );*/

  public foodListAlert(value: IFoodList[] | IFoodList | string): void {
    alert(value);
    return this.emitEvent.emit(value);
  }

  public addFoodList(value: string): Observable<IFoodList> {
    return this.http
      .post<IFoodList>(`${this.repoListFood}list-food`, {
        nome: value
      })
      .pipe(
        res => res,
        err => err
      );
  }

  public putFoodList(value: string, id: number): Observable<IFoodList> {
    return this.http
      .put<IFoodList>(`${this.repoListFood}list-food/${id}`, {
        nome: value
      })
      .pipe(
        res => res,
        err => err
      );
  }
  public deleteFoodList(id: number): Observable<IFoodList> {
    return this.http
      .delete<IFoodList>(`${this.repoListFood}list-food/${id}`)
      .pipe(
        res => res,
        err => err
      );
  }
}
