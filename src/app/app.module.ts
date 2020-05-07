import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './docs/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowItWorksComponent } from './docs/pages/how-it-works/how-it-works.component';
import { SetupComponent } from './docs/pages/setup/setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocsComponent } from './docs/docs.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PluginVSCodeComponent } from './docs/pages/plugin-vscode/plugin-vscode.component';
import { DictionaryComponent } from './docs/pages/dictionary/dictionary.component';
import { FunctionsComponent } from './docs/pages/functions/functions.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
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
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
