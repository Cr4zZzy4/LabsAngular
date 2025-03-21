import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerviyComponent } from './perviy.component';

describe('PerviyComponent', () => {
  let component: PerviyComponent;
  let fixture: ComponentFixture<PerviyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerviyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerviyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
