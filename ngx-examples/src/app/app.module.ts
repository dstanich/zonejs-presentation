import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LaunchItemComponent } from './launch-list/launch-item/launch-item.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchDataService } from './launch-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchItemComponent,
    LaunchListComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [LaunchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
