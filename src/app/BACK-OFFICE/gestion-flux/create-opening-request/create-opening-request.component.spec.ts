import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { CreateOpeningRequestComponent } from './create-opening-request.component';

describe('CreateOpeningRequestComponent', () => {
  let component: CreateOpeningRequestComponent;
  let fixture: ComponentFixture<CreateOpeningRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule ],

      declarations: [ CreateOpeningRequestComponent ],
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpeningRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
