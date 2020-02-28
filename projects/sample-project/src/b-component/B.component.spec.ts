import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponent } from './B.component';
import { MockComponent } from '../helpers/mock-component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleChange } from '@angular/core';
import { KIBANA_ID} from '../constants';

describe('BComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BComponent
      ],
      imports: [
        MatTabsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not accept undefined x name', () => {
    component.x = undefined;
    component.ngOnChanges({
      x: new SimpleChange(null, component.x, true)
    });
    // checks if the port number of BComponent is a negative number
    expect(component.errorMessage).toBe('x is undefined');
  });

  it('should expect y input to be a number', () => {
    component.y = 56014;
    component.ngOnChanges({
      y: new SimpleChange(null, component.y, true)
    });
    fixture.detectChanges();
    // checks if the port number of BComponent is a number
    expect(component.errorMessage).toBe('');
  });

  it('should not accept negative port numbers', () => {
    component.y = -56014;
    component.ngOnChanges({
      y: new SimpleChange(null, component.y, true)
    });
    fixture.detectChanges();
    // checks if the port number of BComponent is a negative number
    expect(component.errorMessage).toBe('The y number is invalid');
  });

  it('should not accept zero as the port number', () => {
    component.y = 0;
    component.ngOnChanges({
      y: new SimpleChange(null, component.y, true)
    });
    fixture.detectChanges();
    // checks if the port number of BComponent is a negative number
    expect(component.errorMessage).toBe('The port number is invalid');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
