import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingAddComponent } from './hunting-add.component';

describe('HuntingAddComponent', () => {
  let component: HuntingAddComponent;
  let fixture: ComponentFixture<HuntingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuntingAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuntingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
