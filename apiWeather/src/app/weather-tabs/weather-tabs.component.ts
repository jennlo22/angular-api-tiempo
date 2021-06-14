import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';
import { DataWeather } from '../class/data-weather.structure';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-weather-tabs',
  templateUrl: './weather-tabs.component.html',
  styleUrls: ['./weather-tabs.component.css'],
})
export class WeatherTabsComponent implements OnInit {
    weather: DataWeather;


  constructor(public apiDataService: ApiDataService) {
    this.apiDataService.datesApi.subscribe(data=>this.weather = data.list);
    this.apiDataService.datesApi.subscribe(
      message => console.log(message.list)
    );
  }


  ngOnInit(): void {
  }

}
