import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuItems = [
    {
      label: 'Introdução',
      link: '',
      disabled: false
    },
    {
      label: 'Como funciona',
      link: 'como-funciona',
      disabled: false
    },
    {
      label: 'Instalação',
      link: 'instalacao',
      disabled: false
    },
    {
      label: 'Dicionário',
      link: 'dicionario',
      disabled: true
    },
    {
      label: 'Funções',
      link: 'funcoes',
      disabled: true
    },
    {
      label: 'Playground',
      link: 'playground',
      disabled: true
    },
  ];
  public currentRoute = '';
}
