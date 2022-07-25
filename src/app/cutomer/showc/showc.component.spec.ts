import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcComponent } from './showc.component';

describe('ShowcComponent', () => {
  let component: ShowcComponent;
  let fixture: ComponentFixture<ShowcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
