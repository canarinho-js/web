import { Component, OnInit } from '@angular/core';
import { traduzir_para_js } from 'canarinho';

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
  public code = 'função minha_primeira_funcao() {\n\tretornar "Olá mundo";\n}\n\nminha_primeira_funcao();';
  public codeResult = '';

  public constructor() { }

  public ngOnInit(): void { }

  public runCode() {
    const jsCode = traduzir_para_js(this.code);
    this.codeResult = eval(jsCode);
  }

}
