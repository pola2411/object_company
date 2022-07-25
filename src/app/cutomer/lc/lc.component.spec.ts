import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcComponent } from './lc.component';

describe('LcComponent', () => {
  let component: LcComponent;
  let fixture: ComponentFixture<LcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
