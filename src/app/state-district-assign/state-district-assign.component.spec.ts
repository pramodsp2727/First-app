import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDistrictAssignComponent } from './state-district-assign.component';

describe('StateDistrictAssignComponent', () => {
  let component: StateDistrictAssignComponent;
  let fixture: ComponentFixture<StateDistrictAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateDistrictAssignComponent]
    });
    fixture = TestBed.createComponent(StateDistrictAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
