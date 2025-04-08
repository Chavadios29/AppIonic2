import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArnoldSlpitPage } from './arnold-slpit.page';

describe('ArnoldSlpitPage', () => {
  let component: ArnoldSlpitPage;
  let fixture: ComponentFixture<ArnoldSlpitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArnoldSlpitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
