import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: 'app.component.html',
  template: `
    <app-food-list></app-food-list>
    <app-food-add></app-food-add>
    <!--<app-new-component></app-new-component>
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">add</button>
    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h2>{{ getDados.idade }}</h2></ng-template
    >
    <app-output (enviarDados)="setDados($event)"></app-output>-->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //ciclos de vida de uma aplicação angular
  //public title = 'ps-app';
  public destruir: boolean = true;
  public valor: number = 1;
  public addValue: number = 0;
  public getDados: { nome: string; idade: number } | undefined;
  //@Input() public title: string = 'Bem vindo';
  constructor() {
    //É chamado assim que é iniciado. É o primeiro passo do ciclo de vida do angular
  }

  public setDados(event: { nome: string; idade: number }): void {
    this.getDados = event;
  }

  public add(): void {
    this.addValue += 1;
  }

  public adicionar(): number {
    return (this.valor += 1);
  }
  public destruirComponent() {
    this.destruir == false ? (this.destruir = true) : (this.destruir = false);
  }

  ngOnInit(): void {
    //É chamado logo após todo o conteúdo ser carregado
  }
}
/**
 *
 * ngOnInit(): void {} //É chamado logo após todo o conteúdo ser carregado
 *
 * ngOnChanges(): void {} //Sempre que um valor externo é recebido
 *
 * ngDoCheck():void{}
 *    Este eveno é disparado Sempre que as proriedades
 *    de enstrada de um componente são verificadas.
 *
 *  ngAfterContentInit():void{}
 *    Este método de ciclo de vida é executado quando
 *    o Angular realiza qualquer pojeção de conteúdo
 *    nas visualizações do componente.
 *
 *  ngAfterContentChecked():void{}
 *    Este método de gancho de ciclo de vida é executado
 *    sempre que o conteúdo do componente é verificado
 *    mecanismo de detecção de alteração do Angular.
 *
 *  ngAfterViewInit():void{}
 *    Este método de gancho de ciclo de vida é executado
 *    quando a visualização do componente foi totalmente
 *    inicializada.
 *
 *  ngAfterViewChecked():void{}
 *    Ele é executado sempre que a visualização de um
 *    determinado componente foi verificado pelo
 *    algoritmo de detecção de alteração do Angular.
 *
 *  ngOnDestroy():any{}
 */
