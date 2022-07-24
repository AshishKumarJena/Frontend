import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestDialogComponent } from './service-request-dialog.component';

describe('ServiceRequestDialogComponent', () => {
  let component: ServiceRequestDialogComponent;
  let fixture: ComponentFixture<ServiceRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
