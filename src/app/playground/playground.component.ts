import { Component, OnInit } from '@angular/core';
import * as canarinho from 'canarinho';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  public editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    minimap: {enabled: false }
  };
  public code = 'function x() {\nconsole.log("Hello world!");\n}';
  public codeResult = '';

  public constructor() { }

  public ngOnInit(): void { }

  public runCode() {
    // const jsCode = canarinho.traduzir_para_js(this.code);
    // this.codeResult = eval(this.code);
  }

}
