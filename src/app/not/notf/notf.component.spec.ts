import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfComponent } from './notf.component';

describe('NotfComponent', () => {
  let component: NotfComponent;
  let fixture: ComponentFixture<NotfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
