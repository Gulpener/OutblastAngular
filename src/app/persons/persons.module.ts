import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from './../app.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonAddDialogComponent } from './person-add/person-add-dialog.component';
import { PersonsComponent } from './persons/persons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [
    PersonsComponent,
    PersonDetailComponent,
    PersonAddDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PersonsRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
})
export class PersonsModule { }
