import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMatComponent } from './in-mat.component';

describe('InMatComponent', () => {
  let component: InMatComponent;
  let fixture: ComponentFixture<InMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InMatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
