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
      label: 'Instalação',
      link: 'instalacao',
      disabled: false
    },
    {
      label: 'Dicionário',
      link: 'dicionario',
      disabled: false
    },
    {
      label: 'Funções',
      link: 'funcoes',
      disabled: false
    },
    {
      label: 'Extensão VSCode',
      link: 'extensao-vscode',
      disabled: false
    },
  ];
}
