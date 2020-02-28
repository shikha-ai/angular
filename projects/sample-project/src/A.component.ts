import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

/**
 * The main component which accepts host and port values from the consuming application
 */
@Component({
  selector: 'a-component',
  templateUrl: './A.component.html',
  styleUrls: ['./A.component.theme-scss.scss']
})
export class AComponent implements OnInit {
  /**
   * Accepting input from the consuming application
   */
  @Input() x: string;

  /**
   * Accepting input from the consuming application
   */
  @Input() y: number;
  constructor() {
  }

  ngOnInit() {
  }

}
