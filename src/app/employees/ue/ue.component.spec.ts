import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UEComponent } from './ue.component';

describe('UEComponent', () => {
  let component: UEComponent;
  let fixture: ComponentFixture<UEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
