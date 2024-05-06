import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonToggleComponent } from './botton-toggle.component';

describe('BottonToggleComponent', () => {
  let component: BottonToggleComponent;
  let fixture: ComponentFixture<BottonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottonToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
