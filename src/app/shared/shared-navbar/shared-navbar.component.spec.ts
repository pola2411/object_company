import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNavbarComponent } from './shared-navbar.component';

describe('SharedNavbarComponent', () => {
  let component: SharedNavbarComponent;
  let fixture: ComponentFixture<SharedNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
