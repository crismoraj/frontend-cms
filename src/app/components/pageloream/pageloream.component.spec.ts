import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageloreamComponent } from './pageloream.component';

describe('PageloreamComponent', () => {
  let component: PageloreamComponent;
  let fixture: ComponentFixture<PageloreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageloreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageloreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
