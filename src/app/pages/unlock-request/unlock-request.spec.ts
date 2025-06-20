import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockRequest } from './unlock-request';

describe('UnlockRequest', () => {
  let component: UnlockRequest;
  let fixture: ComponentFixture<UnlockRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
