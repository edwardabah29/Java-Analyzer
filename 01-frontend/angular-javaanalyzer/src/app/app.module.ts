import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TextInputComponent } from './components/text-input/text-input.component';
import { AnalyzeButtonComponent } from './components/analyze-button/analyze-button.component';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    AnalyzeButtonComponent,
    DisplayAreaComponent,
    ToggleSwitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
