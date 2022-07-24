import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingDialogComponent } from './service-booking-dialog.component';

describe('ServiceBookingDialogComponent', () => {
  let component: ServiceBookingDialogComponent;
  let fixture: ComponentFixture<ServiceBookingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBookingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
