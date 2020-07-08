import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  public dictionary = [
    {
      can: 'classe',
      js: 'class'
    },
    {
      can: 'construtor',
      js: 'constructor'
    },
    {
      can: 'instância',
      js: 'this'
    },
    {
      can: 'instanciar',
      js: 'new'
    },
    {
      can: 'função',
      js: 'function'
    },
    {
      can: 'retornar',
      js: 'return'
    },
    {
      can: 'variável',
      js: 'var'
    },
    {
      can: 'se',
      js: 'if'
    },
    {
      can: 'ou então',
      js: 'else if'
    },
    {
      can: 'senão',
      js: 'else'
    },
    {
      can: 'verificar',
      js: 'switch'
    },
    {
      can: 'caso seja',
      js: 'case'
    },
    {
      can: 'em caso inesperado',
      js: 'default'
    },
    {
      can: 'parar',
      js: 'break'
    },
    {
      can: 'enquanto',
      js: 'while'
    },
    {
      can: 'importar',
      js: 'require'
    },
    {
      can: 'nulo',
      js: 'null'
    },
    {
      can: 'em_maiúsculo',
      js: 'toUpperCase'
    },
    {
      can: 'em_minúsculo',
      js: 'toLowerCase'
    },
    {
      can: 'verdadeiro',
      js: 'true'
    },
    {
      can: 'falso',
      js: 'false'
    },
    {
      can: 'imprimir',
      js: 'console.log'
    },
    {
      can: 'info',
      js: 'console.info'
    },
    {
      can: 'erro',
      js: 'console.error'
    },
    {
      can: 'aviso',
      js: 'console.warn'
    },
    {
      can: 'arredonda',
      js: 'Math.round'
    },
    {
      can: 'teto',
      js: 'Math.ceil'
    },
    {
      can: 'base',
      js: 'Math.floor'
    },
    {
      can: 'aleatório',
      js: 'Math.random'
    },
    {
      can: 'tangente',
      js: 'Math.tan'
    },
    {
      can: 'seno',
      js: 'Math.sin'
    },
    {
      can: 'coseno',
      js: 'Math.cos'
    },
    {
      can: 'potência',
      js: 'Math.pow'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
