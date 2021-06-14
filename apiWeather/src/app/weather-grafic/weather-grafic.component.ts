import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ApiDataGraficService } from '../services/api-data-grafic.service';
import { GeolocalizationService } from '../services/geolocalization.service';

@Component({
  selector: 'app-weather-grafic',
  templateUrl: './weather-grafic.component.html',
  styleUrls: ['./weather-grafic.component.css']
})
export class WeatherGraficComponent implements OnInit {

  constructor(public apiDataGraficService: ApiDataGraficService, private gtmService: GoogleTagManagerService) { }
  public weatherData;
  public ciudad = 'Medellin';
  public title = 'Prónostico del tiempo';

  ngOnInit(): void {
    this.cargarDatos();
  }

  async cargarDatos(){
    this.weatherData = await this.apiDataGraficService.getDatosCoordenate(this.ciudad);
    this.title =  'Prónostico del tiempo para ' + this.ciudad;
    this.customEvent1();
  }

  customEvent1() {
    const gtmTag1 = {
      event: 'busqueda_ciudad',
      ciudad: this.ciudad,
      temperatura: this.weatherData[0].max
    };
    this.gtmService.pushTag(gtmTag1);
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
