import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityEngagementComponent } from './community-engagement.component';

describe('CommunityEngagementComponent', () => {
  let component: CommunityEngagementComponent;
  let fixture: ComponentFixture<CommunityEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityEngagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
