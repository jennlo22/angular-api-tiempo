import { Component, OnInit } from '@angular/core';
import { ApiDataGraficService } from '../services/api-data-grafic.service';
import { GeolocalizationService } from '../services/geolocalization.service';

@Component({
  selector: 'app-weather-grafic',
  templateUrl: './weather-grafic.component.html',
  styleUrls: ['./weather-grafic.component.css']
})
export class WeatherGraficComponent implements OnInit {

  constructor(public apiDataGraficService: ApiDataGraficService) { }
  public weatherData;
  public ciudad = 'Medellin';
  public title = 'Prónostico del tiempo';

  ngOnInit(): void {
    this.cargarDatos();
  }

  async cargarDatos(){
    this.weatherData = await this.apiDataGraficService.getDatosCoordenate(this.ciudad);
    this.title =  'Prónostico del tiempo para ' + this.ciudad;
  }

  public labelContentTo(e: any): string {
    return `${e.value.to} °C`;
  }

  public labelContentFrom(e: any): string {
    return `${e.value.from} °C`;
  }

  public labelContentMonth(e: any): string {
    return `${e.value.month}`;
  }

}
