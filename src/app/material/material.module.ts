import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// // material modules
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  // declarations: [],--->not needed for manual module
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
