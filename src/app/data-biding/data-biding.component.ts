import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  public placeholder = 'Digite seu nome';
  public nome: string = '';
  public idade: number = 21;
  public maisUm: number = 1;
  public click: string = 'button';
  public names: Array<string> = [];

  public checkDisable: boolean = true;

  public imgSrc: string = 'https://www.publicsoft.com.br/modules/img/logo.png';
  public imgTitle: string = 'Property Binding';

  public position: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
    alert('clicou bem');
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
  public saveName(name: any) {
    this.nome
      ? ((this.nome = ''), this.names.push(name.value))
      : alert('o campo nome nõa pode estar vazio');
    // alert(name.value);
  }

  ngOnInit(): void {}
}
