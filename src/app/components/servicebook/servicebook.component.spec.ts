import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicebookComponent } from './servicebook.component';

describe('ServicebookComponent', () => {
  let component: ServicebookComponent;
  let fixture: ComponentFixture<ServicebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
