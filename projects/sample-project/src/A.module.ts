import { NgModule, ErrorHandler } from '@angular/core';
import { AComponent } from './A.component';
import { BComponent } from './b-component/B.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { CComponent } from './c-component/C.component';
@NgModule({
  declarations: [AComponent, BComponent, CComponent],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    CommonModule
  ],
  exports: [
    AComponent
  ]
})
export class AModule {
  constructor() {
  }
}
