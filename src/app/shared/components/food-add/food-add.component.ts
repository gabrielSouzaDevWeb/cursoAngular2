import { IFoodList } from '../../interfaces/food-list.interface';
import { Observable } from 'rxjs';
import { FoodListService } from '../../service/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}
  ngOnInit(): void {}
  public addItemToList(value: string): Observable<Array<IFoodList>> | any {
    return this.foodListService.addFoodList(value).subscribe({
      next: res => this.foodListService.foodListAlert(res.nome),
      error: err => err
    });

    // .subscribe(
    //   res => {
    //     this.foodListService.foodListAlert(res);
    //     return this.foodList.push(res);
    //   },
    //   error => error
    // );
  }
}
