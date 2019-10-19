import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterloginComponent } from './servicecenterlogin.component';

describe('ServicecenterloginComponent', () => {
  let component: ServicecenterloginComponent;
  let fixture: ComponentFixture<ServicecenterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecenterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
