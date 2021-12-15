import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistersComponent } from './admin-registers.component';

describe('AdminRegistersComponent', () => {
  let component: AdminRegistersComponent;
  let fixture: ComponentFixture<AdminRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
