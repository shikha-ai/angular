import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
/**
 * Displays the iFrame on valid Kibana Url and an error message on invalid port number.
 */
@Component({
  selector: 'c-component',
  templateUrl: './C.component.html',
  styleUrls: ['./C.component.theme-scss.scss']
})
export class CComponent implements OnInit {
  /**
   * Accepting the kibanaUrl as an input. This is passed from the navigation bar component 
   */
  @Input() output: string;

  /**
   *  Accepting the error message that needs to be displayed on invalid port number. This is passed from the navigation bar component.
   */
  @Input() errorMessage: string;

  constructor() {
  }
  ngOnInit() {

  }
}
