import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeSelfie } from './take-selfie';

describe('TakeSelfie', () => {
  let component: TakeSelfie;
  let fixture: ComponentFixture<TakeSelfie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeSelfie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeSelfie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
