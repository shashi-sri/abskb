import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertsonsMainComponent } from './albertsons-main.component';

describe('AlbertsonsMainComponent', () => {
  let component: AlbertsonsMainComponent;
  let fixture: ComponentFixture<AlbertsonsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbertsonsMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbertsonsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
