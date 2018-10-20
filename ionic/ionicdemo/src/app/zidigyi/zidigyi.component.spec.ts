import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZidigyiComponent } from './zidigyi.component';

describe('ZidigyiComponent', () => {
  let component: ZidigyiComponent;
  let fixture: ComponentFixture<ZidigyiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZidigyiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZidigyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
