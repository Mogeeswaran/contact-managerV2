import { NgModule,Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


// // material modules
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatInputModule} from '@angular/material';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule,MatChipInputEvent} from '@angular/material/chips';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatAutocompleteModule} from '@angular/material/autocomplete';




@NgModule({
  // declarations: [],--->not needed for manual module
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    Component, ElementRef, ViewChild,
    FormControl,
    COMMA,
    ENTER,
    MatAutocompleteSelectedEvent, MatAutocomplete,
    // MatChipInputEvent,
    MatAutocompleteModule

  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    COMMA,
    ENTER,
    MatAutocompleteSelectedEvent, MatAutocomplete,
    // MatChipInputEvent,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
