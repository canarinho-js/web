import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './docs/pages/home/home.component';
import { SetupComponent } from './docs/pages/setup/setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocsComponent } from './docs/docs.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DictionaryComponent } from './docs/pages/dictionary/dictionary.component';
import { FunctionsComponent } from './docs/pages/functions/functions.component';
import { PluginVSCodeComponent } from './docs/pages/plugin-vscode/plugin-vscode.component';


const routes: Routes = [
  { path: '', redirectTo: 'docs', pathMatch: 'full'},
  { path: 'docs', component: DocsComponent,
    children: [
      { path: '', redirectTo: 'introducao', pathMatch: 'full'},
      { path: 'introducao', component: HomeComponent },
      { path: 'instalacao', component: SetupComponent },
      { path: 'dicionario', component: DictionaryComponent },
      { path: 'funcoes', component: FunctionsComponent },
      { path: 'plugin-vscode', component: PluginVSCodeComponent },
    ]
  },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
