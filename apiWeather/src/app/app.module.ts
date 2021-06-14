import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherTabsComponent } from './weather-tabs/weather-tabs.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ApiDataGraficService } from './services/api-data-grafic.service';
import { WeatherGraficComponent } from './weather-grafic/weather-grafic.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WeatherTabsComponent,
    WeatherGraficComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    ChartsModule,
    FormsModule
  ],
  providers: [ApiDataGraficService],
  bootstrap: [AppComponent]
})
export class AppModule { }
