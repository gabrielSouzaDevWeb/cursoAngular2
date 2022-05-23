import { IFoodList } from '../../interfaces/food-list.interface';
import { Observable, Subscription } from 'rxjs';
import { FoodListService } from '../../service/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: Array<IFoodList> = [];
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    // this.foodList.push();
    this.foodListService.getFoodList().subscribe({
      next: (res: any) => (this.foodList = res),
      error: (err: any) =>
        console.log(`erro: ${err.name}, detalhe: ${err.message}`)
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: string) => {
        console.log(res);
        return this.foodList.push({ nome: res });
      },
      error: (err: any) => err
    });
  }

  public deleteFoodList(
    item: IFoodList
  ): Observable<IFoodList> | Subscription | void {
    let foodId: number | any = item.id;
    return console.log(foodId);
    // this.foodListService.deleteFoodList(id).subscribe({
    //   next: res => console.log(res),
    //   error: err => err
    // });
  }
}
