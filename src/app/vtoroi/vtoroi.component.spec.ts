import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtoroiComponent } from './vtoroi.component';

describe('VtoroiComponent', () => {
  let component: VtoroiComponent;
  let fixture: ComponentFixture<VtoroiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtoroiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtoroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
