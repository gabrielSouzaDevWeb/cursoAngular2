import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public array: Array<{ nome: string }> = [];
  public nome: string = 'Gabriel';

  constructor() {
    this.array = [{ nome: 'gabriel' }, { nome: 'lucas' }, { nome: 'souza' }];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.condition ? (this.condition = false) : (this.condition = true);
    }, 2000);
  }

  public onClick(): void {
    this.conditionClick
      ? (this.conditionClick = false)
      : (this.conditionClick = true);
  }

  onClickAddList(): void {
    this.array.push({ nome: 'Fulano' });
  }

  onClickRemoveList(): void {
    this.array.pop();
  }

  onClickEventListener(event: number): void {
    this.array.splice(event, 1);
  }
}
