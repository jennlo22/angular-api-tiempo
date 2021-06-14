import { Component, OnInit } from '@angular/core';
import { ApiDataGraficService } from '../services/api-data-grafic.service';

@Component({
  selector: 'app-weather-grafic',
  templateUrl: './weather-grafic.component.html',
  styleUrls: ['./weather-grafic.component.css']
})
export class WeatherGraficComponent implements OnInit {

  constructor(public apiDataGraficService: ApiDataGraficService) { }
  public weatherData;

  ngOnInit(): void {
    this.cargarDatos();
    console.log(this.weatherData);
  }

  public labelContentFrom(e: any): string {
    return `${e.value.from} °C`;
  }

  async cargarDatos(){
    this.weatherData = await this.apiDataGraficService.getDatosCoordenate();
  }

  public labelContentTo(e: any): string {
    return `${e.value.to} °C`;
  }
}
