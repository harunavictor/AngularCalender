import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DailySelectionComponent } from './daily-selection/daily-selection.component';
import { WeeklySelectionComponent } from './weekly-selection/weekly-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    DailySelectionComponent,
    WeeklySelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
