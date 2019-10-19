import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesignupComponent } from './servicesignup.component';

describe('ServicesignupComponent', () => {
  let component: ServicesignupComponent;
  let fixture: ComponentFixture<ServicesignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
