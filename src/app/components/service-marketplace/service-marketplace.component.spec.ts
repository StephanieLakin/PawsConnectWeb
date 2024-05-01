import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMarketplaceComponent } from './service-marketplace.component';

describe('ServiceMarketplaceComponent', () => {
  let component: ServiceMarketplaceComponent;
  let fixture: ComponentFixture<ServiceMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceMarketplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
