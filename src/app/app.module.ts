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
import { HttpClientModule } from '@angular/common/http';
import { EditContactDialogComponent } from './contacts/contact-details/edit-contact-dialog/edit-contact-dialog.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactModule } from './contacts/contact.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';



// material modules should reorganize in separate modules


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoComponent,
    EditContactDialogComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [EditContactDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
