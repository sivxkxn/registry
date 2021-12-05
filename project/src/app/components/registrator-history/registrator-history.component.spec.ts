import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratorHistoryComponent } from './registrator-history.component';

describe('RegistratorHistoryComponent', () => {
  let component: RegistratorHistoryComponent;
  let fixture: ComponentFixture<RegistratorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
