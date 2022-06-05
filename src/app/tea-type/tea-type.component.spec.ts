import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaTypeComponent } from './tea-type.component';

describe('TeaTypeComponent', () => {
  let component: TeaTypeComponent;
  let fixture: ComponentFixture<TeaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
