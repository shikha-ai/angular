import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { KIBANA_ID } from '../constants';
import { ChangeDetectorRef } from '@angular/core';
/**
 * This component is the top navigation bar. Handles logic on click of a navbar item.
 */
@Component({
  selector: 'b-component',
  templateUrl: './B.component.html',
  styleUrls: ['./B.component.theme-scss.scss']
})
export class BComponent implements OnInit, AfterViewInit, OnChanges {
  /**
   * tabGroup variable refers to the top navigation bar. It gives us the selected navbar item.
   */
  @ViewChild('tabGroup') tabGroup;

  /**
   * Host name of the machine
   */
  @Input() x: string;

  /**
   * Port number on which Kibana server is running
   */
  @Input() y: number;

  output: string;

  /**
   * Variable declared locally to store the navigation bar items in an array.
   */
  navigationList = [];

  /**
   * Variable to store error messages.
   */
  public errorMessage: string;

  /**
   * Constructor initializing the protocol and other variables used to construct the Kibana url.
   */
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.navigationList = KIBANA_ID;
    this.errorMessage = '';
    this.x = 'localhost';
    this.y = 5601;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.errorMessage = '';
    // Check if the host name exists for .spec.ts file
    if (changes.host) {
      // If the host name is undefined assign localhost value to it
      if (typeof changes.host.currentValue === 'undefined') {
        this.throwError('Host name is undefined');
      }
    }
    if (changes.port) {
      // Check whether port number has alphanumeric characters or is not a number on changing the value of port number
      if (isNaN(changes.port.currentValue) && typeof changes.port.currentValue !== 'number' || changes.port.currentValue <= 0) {
        this.throwError('The port number is invalid');
      }
    }

  }

  ngOnInit() {

  }

  /**
   * ngAfterViewInit is called after the view is initialized but before loading the matTabGroup. It will be called only once.
   */
  ngAfterViewInit() {
    // Calling the function with selected navbar item which defaults to 0
    this.displayTabContent(KIBANA_ID[this.tabGroup.selectedIndex].name);
  }

  /**
   * displayTabContent constructs the Kibana url which wil be used to call the iFrame
   */
  displayTabContent(selectedTab: string) {

    // If the selected tab is Session, then display Session output
    if (selectedTab === 'Session') {
      this.output = 'Session';
      // To get rid of ExpressionChangedAfterItHasBeenChecked error
      this.changeDetectorRef.detectChanges();
    }

  }
  /**
   * Displays the error message on invalid y and undefined x parameter
   */
  public throwError(message: string) {
    this.errorMessage = message;
  }

}
