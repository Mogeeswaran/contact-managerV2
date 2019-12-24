import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';



// material modules should reorganize in separate modules


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
