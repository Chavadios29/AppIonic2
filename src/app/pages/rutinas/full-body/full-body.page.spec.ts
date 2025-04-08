import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullBodyPage } from './full-body.page';

describe('FullBodyPage', () => {
  let component: FullBodyPage;
  let fixture: ComponentFixture<FullBodyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
