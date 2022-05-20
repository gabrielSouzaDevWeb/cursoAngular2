import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Gabriel Lucas de Souza';
  public idade: number = 21;
  public maisUm: number = 1;

  public checkDisable: boolean = true;

  public imgSrc: string = '../../favicon.ico';
  public imgTitle: string = 'Property Binding';

  public position: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  ngOnInit(): void {}
}
