import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassMatComponent } from './pass-mat.component';

describe('PassMatComponent', () => {
  let component: PassMatComponent;
  let fixture: ComponentFixture<PassMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassMatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
