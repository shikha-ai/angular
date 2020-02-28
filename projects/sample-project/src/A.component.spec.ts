import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponent } from './A.component';
import { BComponent } from './b-component/B.component';
import { MockComponent } from './helpers/mock-component';

describe('AComponent', () => {
  let component: AComponent;
  let fixture: ComponentFixture<AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AComponent, MockComponent({ selector: 'b-component', inputs: ['x', 'y'] })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
