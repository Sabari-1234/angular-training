import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMatComponent } from './email-mat.component';

describe('EmailMatComponent', () => {
  let component: EmailMatComponent;
  let fixture: ComponentFixture<EmailMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailMatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
