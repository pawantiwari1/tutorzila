import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTutorProfileComponent } from './update-tutor-profile.component';

describe('UpdateTutorProfileComponent', () => {
  let component: UpdateTutorProfileComponent;
  let fixture: ComponentFixture<UpdateTutorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTutorProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTutorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
