import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LEComponent } from './le.component';

describe('LEComponent', () => {
  let component: LEComponent;
  let fixture: ComponentFixture<LEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
