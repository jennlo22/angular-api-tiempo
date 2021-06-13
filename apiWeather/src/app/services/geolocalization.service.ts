import { Injectable } from '@angular/core';
import { Coordinates } from '../class/coordinates.structure';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {

  public coordinateSub: Subject<Coordinates> = new Subject<Coordinates>();
  public datesApi$: Observable<Coordinates> = this.coordinateSub.asObservable();
  public navegatorPermission$: Promise<string>;
  public coordinateProm: Promise<Coordinates>;
  public permission$: Promise<string>;

  public coordsSubject: Subject<Coordinates> = new Subject<Coordinates>();
  public coordsPromise: Promise<Coordinates>;


  constructor() {
    this.permission$ = (navigator as any).permissions.query({name: 'geolocation'}).then(permission => permission.state);
   }

   loadGeolo() {
    if (!this.coordinateProm) {
      this.coordinateProm = this.getGeolo();
    }
    this.coordinateProm.then(datesApi => {
      this.coordinateSub.next(datesApi);
    });
  }


  getGeolo(): Promise<Coordinates> {
    return new Promise((res, rej) => {
      if (!navigator || !('geolocation' in navigator)) { 
        return  rej('Geolocation is not available'); 
      }

      (navigator as any).geolocation.getCurrentPosition((position: { coords: { latitude: any; longitude: any; }; }) => {
        res({
          latitud: position.coords.latitude,
          longitud: position.coords.longitude
        });
      });

    });
  }

  

  

}
