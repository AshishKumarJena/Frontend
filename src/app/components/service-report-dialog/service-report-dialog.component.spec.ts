import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReportDialogComponent } from './service-report-dialog.component';

describe('ServiceReportDialogComponent', () => {
  let component: ServiceReportDialogComponent;
  let fixture: ComponentFixture<ServiceReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReportDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
