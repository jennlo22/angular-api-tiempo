import { Component, OnInit } from '@angular/core';
import { GeolocalizationService } from './services/geolocalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'apiWeather';

  constructor( public geolocalizationService: GeolocalizationService) {}


  ngOnInit() {
    this.geolocalizationService.loadGeolo();
  }

}