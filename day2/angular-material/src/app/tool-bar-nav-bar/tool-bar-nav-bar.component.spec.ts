import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarNavBarComponent } from './tool-bar-nav-bar.component';

describe('ToolBarNavBarComponent', () => {
  let component: ToolBarNavBarComponent;
  let fixture: ComponentFixture<ToolBarNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolBarNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolBarNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
