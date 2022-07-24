import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestReportDialogComponent } from './service-request-report-dialog.component';

describe('ServiceRequestReportDialogComponent', () => {
  let component: ServiceRequestReportDialogComponent;
  let fixture: ComponentFixture<ServiceRequestReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestReportDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
