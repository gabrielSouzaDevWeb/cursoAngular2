import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Gabriel Souza', idade: 21 },
    { nome: 'Lucas Souza', idade: 21 },
    { nome: 'Lucas Gabriel', idade: 21 }
  ];
  constructor() {}

  public getDados(index: number): void {
    this.enviarDados.emit(this.list[index]);
    console.log(this.list[index]);
  }

  ngOnInit(): void {}
}
