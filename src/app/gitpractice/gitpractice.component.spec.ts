import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitpracticeComponent } from './gitpractice.component';

describe('GitpracticeComponent', () => {
  let component: GitpracticeComponent;
  let fixture: ComponentFixture<GitpracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitpracticeComponent]
    });
    fixture = TestBed.createComponent(GitpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
