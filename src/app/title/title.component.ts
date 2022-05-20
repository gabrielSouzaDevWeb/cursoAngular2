import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public title: string = 'Bem vindo!';
  constructor() {
    this.title;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    //Sempre que um valor externo é recebido
    console.log('Foi alterado com sucesso!');
  }

  ngOnDestroy(): void {
    console.log('O Component title foi destruido');
  }
}
