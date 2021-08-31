import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PlanningComponent } from './planning/planning.component';
import { FilterComponent } from './body/filter/filter.component';
import { TableComponent } from './body/table/table.component';
import { MainFormComponent } from './planning/main-form/main-form.component';
import { MembersFormComponent } from './planning/members-form/members-form.component';
import { SelectFieldComponent } from './body/filter/select-field/select-field.component';
import { EventComponent } from './planning/main-form/event/event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PlanningComponent,
    FilterComponent,
    TableComponent,
    MainFormComponent,
    MembersFormComponent,
    SelectFieldComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
