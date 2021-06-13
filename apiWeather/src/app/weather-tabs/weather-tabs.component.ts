import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';
import { DataWeather } from '../class/data-weather.structure';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-weather-tabs',
  templateUrl: './weather-tabs.component.html',
  styleUrls: ['./weather-tabs.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class WeatherTabsComponent implements OnInit {
    weather: DataWeather;
    title = 'my-app';
    state = 'collapsed';
    breakpoint;
    public isCollapsed = false;
    
  constructor(public apiDataService: ApiDataService) {
    this.apiDataService.datesApi.subscribe(data=>this.weather = data.list);
    this.apiDataService.datesApi.subscribe(
      message => console.log(message.list)
    );
  }


  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 5
  }

  toggle(): void {
    this.state = this.state === 'collapsed'  ? 'expanded' : 'collapsed';
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 5;
  }
}
