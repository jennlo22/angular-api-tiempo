import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of, pipe, Subject, throwError} from 'rxjs';
import { environment } from '../../environments/environment';
import { Coordinates } from '../class/coordinates.structure';
import { GeolocalizationService } from '../services/geolocalization.service';
import {  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap, 
  catchError} from 'rxjs/operators';
  

interface coords {
     Lat: number,
     Lon: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataGraficService {
  public coordinateSub: Subject<any> = new Subject<any>(); // weatherSubject
  public datesApi: Observable<any> = this.coordinateSub.asObservable(); //Weather
  public datesApiCoodenates: Observable<any> = this.coordinateSub.asObservable(); //Weather
  public results: coords;
  public results2;
  public weatherdat: any[] = [];
  public cordinatesActual;

  constructor(private http: HttpClient, public geolocalizationService: GeolocalizationService) { 
      this.datesApi = this.coordinateSub.asObservable();
  }

    getCoordenate(base: string = "Medellin"): Promise<any> {
      const args = `?q=${base}&units=imperial&appid=${environment.key}`;
      const url = environment.apiWeather + args;
      return this.http.get(url).toPromise();
    }

    getweatherFiveDays(): Promise<any> {
      const args = `?lat=${this.results['lat']}&lon=${this.results['lon']}&exclude=current,hourly,minutely&appid=${environment.key}&units=metric`;
      const url = environment.apiOneCall + args;
      return this.http.get(url).toPromise();
    }

    data:any;
    async requestData(base) {
      let result= null;
      this.data = await this.getCoordenate(base);
      this.results = this.data.list[0].coord;
      result =  await this.requestData2();
      return await result;
    }

    data2:any;
    async requestData2() {
      const weatherd: any[] = [];
      this.data = await this.getweatherFiveDays();
      this.results2 = this.data.daily;
      this.results2.slice(0,5).forEach(function (value) {
        var dateCon = new Date(value.dt*1000);
        var day = dateCon.getDate();
        var month = dateCon.getMonth()+1;
        var year = dateCon.getFullYear();
        var dias=["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
        var dt = new Date(month+' '+day+', '+year+' 12:00:00');
        let dateConv = dias[dt.getUTCDay()];   

        weatherd.push(
          { 
            month: dateConv + '(' + day + '/' + month+')',
            min: value.temp.min, 
            max: value.temp.max 
          });
      }); 
      this.weatherdat=weatherd;
      return await weatherd;
    }
  
    async getDatosCoordenate(city){
      let respuestica = null;
      respuestica = await this.requestData(city);
      return respuestica;
    }

}