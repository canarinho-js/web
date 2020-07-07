import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './docs/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupComponent } from './docs/pages/setup/setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocsComponent } from './docs/docs.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PluginVSCodeComponent } from './docs/pages/plugin-vscode/plugin-vscode.component';
import { DictionaryComponent } from './docs/pages/dictionary/dictionary.component';
import { FunctionsComponent } from './docs/pages/functions/functions.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    PageNotFoundComponent,
    DocsComponent,
    PlaygroundComponent,
    PluginVSCodeComponent,
    DictionaryComponent,
    FunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MonacoEditorModule.forRoot({
      onMonacoLoad: () => {
        const monaco = (<any>window).monaco
        monaco.languages.register({ id: 'canarinho' });

        monaco.languages.setMonarchTokensProvider('canarinho', {
          tokenizer: {
            root: [
              [/(ou então|senão|se|enquanto|verificar|parar|retornar)/, "control"],
              [/(caso seja|em caso inesperado)/, "control.less"],
              [/(classe|construtor|variável)/, "variable"],
              [/(método|estático|função|\)|\()/, "function"],
              [/(instanciar|instância)/, "new"],
              [/(\+|\-|\*|\{|\}|\$|\/|\%|\=|\>|\;|\<)/, "arithmetic"],
            ]
          }
        });

        monaco.editor.defineTheme('temaCanarinho', {
          base: 'vs-dark',
          inherit: true,
          rules: [
            { token: 'control', foreground: 'a95b71' },
            { token: 'control.less', foreground: '9a6f73' },
            { token: 'variable', foreground: '85d0fa', fontStyle: 'bold' },
            { token: 'function', foreground: 'd4d3a2' },
            { token: 'new', foreground: 'a95b71' },
            { token: 'arithmetic', foreground: '4187bd' },
          ]
        });
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
