import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDeleteComponent } from './competition-delete.component';

describe('CompetitionDeleteComponent', () => {
  let component: CompetitionDeleteComponent;
  let fixture: ComponentFixture<CompetitionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
