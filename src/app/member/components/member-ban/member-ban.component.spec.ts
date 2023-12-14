import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBanComponent } from './member-ban.component';

describe('MemberBanComponent', () => {
  let component: MemberBanComponent;
  let fixture: ComponentFixture<MemberBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberBanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
