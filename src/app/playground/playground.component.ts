import { Component, OnInit } from '@angular/core';
import { traduzir_para_js } from 'canarinho';
import axios from 'axios';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  public editorOptions = {
    theme: 'vs-dark',
    language: 'canarinho',
    minimap: {enabled: false }
  };
  public code = 'função somar(a, b) {\n\timprimir(`Calculando a soma de ${a} com ${b}`);\n\tretornar a + b;\n}\n\nsomar(1, 2);\n';
  public codeResult = '';
  public codeOutput = [];

  public constructor() { }

  public ngOnInit(): void { }

  public runCode() {
    const jsCode = traduzir_para_js(this.code);

    axios.get(`https://gaiola.herokuapp.com/saida/${jsCode}`)
         .then(response => {
           this.codeResult = response.data.retorno
           this.codeOutput = response.data.impressoes
         })
  }

}
