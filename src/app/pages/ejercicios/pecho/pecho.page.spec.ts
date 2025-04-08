import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PechoPage } from './pecho.page';

describe('PechoPage', () => {
  let component: PechoPage;
  let fixture: ComponentFixture<PechoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PechoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
