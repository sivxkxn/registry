import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPrisonersComponent } from './register-prisoners.component';

describe('RegisterPrisonersComponent', () => {
  let component: RegisterPrisonersComponent;
  let fixture: ComponentFixture<RegisterPrisonersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPrisonersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPrisonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
