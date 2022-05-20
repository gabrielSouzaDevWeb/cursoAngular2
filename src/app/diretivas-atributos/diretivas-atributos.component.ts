import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPx: string = '20px';
  public backgroundColor: string = '#de2222';
  public date: Date = new Date();

  public nome: string = '';
  public list: Array<{ nome: string }> = [{ nome: 'Gabriel Lucas de Souza' }];

  constructor() {}

  public salvar(): void {
    this.nome === ''
      ? alert('o nome não pode estar vazio')
      : this.list.unshift({ nome: this.nome });
    this.nome = '';
  }

  public deleteLast(): void {
    this.list.pop();
  }

  public deleteAll(): void {
    this.list = [];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.valor ? (this.valor = !this.valor) : (this.valor = !this.valor);
      this.heightPx == '20px'
        ? (this.heightPx = '50px')
        : (this.heightPx = '20px');
    }, 1000);
  }
}
