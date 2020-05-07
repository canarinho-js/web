import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginVSCodeComponent } from './plugin-vscode.component';

describe('PluginVSCodeComponent', () => {
  let component: PluginVSCodeComponent;
  let fixture: ComponentFixture<PluginVSCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginVSCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginVSCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
