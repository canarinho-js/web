import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {

  public menuItems = [
    {
      label: 'Introdução',
      link: 'introducao',
      disabled: false
    },
    {
      label: 'Como funciona',
      link: 'como-funciona',
      disabled: true
    },
    {
      label: 'Instalação',
      link: 'instalacao',
      disabled: true
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
      label: 'Plugin VSCode',
      link: 'plugin-vscode',
      disabled: true
    },
  ];

}
