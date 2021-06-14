import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';
import { DataWeather } from '../class/data-weather.structure';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-weather-tabs',
  templateUrl: './weather-tabs.component.html',
  styleUrls: ['./weather-tabs.component.css'],
})
export class WeatherTabsComponent implements OnInit {
    weather: DataWeather;


  constructor(public apiDataService: ApiDataService, private gtmService: GoogleTagManagerService) {
    this.apiDataService.datesApi.subscribe(data=>this.weather = data.list);
  
    this.apiDataService.datesApi.subscribe((coords) => {
      this.customEvent(coords.list);
    });
  }


  ngOnInit(): void {
  }

  customEvent(data) {
    const gtmTag = {
      event: 'temperatura_actual',
      ciudad: data[0].name,
      temperatura: data[0].main.temp
    };
    this.gtmService.pushTag(gtmTag);
  }


}
