import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxListComponent } from './flux-list.component';

describe('FluxListComponent', () => {
  let component: FluxListComponent;
  let fixture: ComponentFixture<FluxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
