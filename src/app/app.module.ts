import { CalendarComponent } from './calendar-module/calendar/calendar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonAddDialogComponent } from './persons/person-add/person-add-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PersonsModule } from './persons/persons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { ExternalInfoModule } from './external-info.module';
import { CalendarModule } from './calendar-module/calendar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PersonsModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    ExternalInfoModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [PersonAddDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
