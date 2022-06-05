import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaTypeInfoComponent } from './tea-type-info.component';

describe('TeaTypeInfoComponent', () => {
  let component: TeaTypeInfoComponent;
  let fixture: ComponentFixture<TeaTypeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaTypeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaTypeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
