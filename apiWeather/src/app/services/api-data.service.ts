import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Coordinates } from '../class/coordinates.structure';
import { map } from 'rxjs/operators';
import { DataWeather } from '../class/data-weather.structure';
import { GeolocalizationService } from '../services/geolocalization.service';

@Injectable({ 
  providedIn: 'root'
})

export class ApiDataService {

  public coordinateSub: Subject<any> = new Subject<any>(); // weatherSubject
  public datesApi: Observable<any> = this.coordinateSub.asObservable(); //Weather

  constructor(private http: HttpClient, public geolocalizationService: GeolocalizationService) { 
      this.datesApi = this.coordinateSub.asObservable();
  
    
      this.geolocalizationService.datesApi$.subscribe((coords) => {
        this.get(coords);
      });


  }

  get(coordinate: Coordinates) {
    const args = `?lat=${coordinate.latitud}&lon=${coordinate.longitud}&cnt=5&appid=${environment.key}&lang=sp&units=metric`;
    const url = environment.apiWeather + args;


    this.http.get(url).subscribe(this.coordinateSub);
  }


}
