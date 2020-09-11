import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningRequestComponent } from './opening-request.component';

describe('OpeningRequestComponent', () => {
  let component: OpeningRequestComponent;
  let fixture: ComponentFixture<OpeningRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
