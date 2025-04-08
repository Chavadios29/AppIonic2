import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PPLPage } from './ppl.page';

describe('PPLPage', () => {
  let component: PPLPage;
  let fixture: ComponentFixture<PPLPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PPLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
