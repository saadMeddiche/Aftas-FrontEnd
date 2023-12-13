import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionUpdateComponent } from './competition-update.component';

describe('CompetitionUpdateComponent', () => {
  let component: CompetitionUpdateComponent;
  let fixture: ComponentFixture<CompetitionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
