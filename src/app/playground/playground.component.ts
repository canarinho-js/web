import { Component, OnInit } from '@angular/core';
import { traduzir_para_js } from 'canarinho';
import { HttpClient } from '@angular/common/http';
import lessons from './lessons';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  public editorOptions = {
    theme: 'temaCanarinho',
    language: 'canarinho',
    minimap: { enabled: false }
  };

  public code = {
    result: '',
    output: []
  };

  public currentLesson = {
    label: '',
    link: '',
    text: '',
    code: '',
  };

  public lessons = [];

  public constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.loadLessons();
    this.currentLesson = this.lessons[0];
  }

  public loadLessons(): void {
    lessons.forEach(lesson => {
      this.http.get(lesson.code, {
        responseType: 'text',
        headers: {
          'Content-Type': 'text/plain'
        }
      }).subscribe(data => lesson.code = data);
      this.lessons.push(lesson);
    });
  }

  public selectLesson(lesson: any): void {
    this.currentLesson = lesson;
    this.resetCode();
  }

  public runCode(): void {
    const jsCode = traduzir_para_js(this.currentLesson.code);

    this.http.post('https://gaiola.herokuapp.com/saida', { jsCode })
      .subscribe((res: any) => {
        this.setCodeResult(res.retorno, res.impressoes);
      });
  }

  public resetCode(): void {
    this.code = {
      result: '',
      output: []
    };
  }

  public setCodeResult(returns: string, prints: []): void {
    this.code.result = returns;
    this.code.output = prints;
  }

}
