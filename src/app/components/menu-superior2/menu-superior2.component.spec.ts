import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperior2Component } from './menu-superior2.component';

describe('MenuSuperior2Component', () => {
  let component: MenuSuperior2Component;
  let fixture: ComponentFixture<MenuSuperior2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSuperior2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSuperior2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
