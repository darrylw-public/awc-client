import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { UserCardComponent } from './user-card/user-card.component';

import { AwcApiService } from './awc-api.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AttendeesComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AwcApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
