import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public listComida: Array<{ comida: string; preco: number }> = [
    { comida: 'X-salada', preco: 12 },
    { comida: 'X-bacon', preco: 15 },
    { comida: 'pizza', preco: 29 }
  ];
  constructor() {}

  ngOnInit(): void {}

  public submitForm(form: NgForm) {
    console.log(form);
  }
}
