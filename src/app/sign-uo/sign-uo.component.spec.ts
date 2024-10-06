import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUoComponent } from './sign-uo.component';

describe('SignUoComponent', () => {
  let component: SignUoComponent;
  let fixture: ComponentFixture<SignUoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
