import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraficComponent } from './weather-grafic.component';

describe('WeatherGraficComponent', () => {
  let component: WeatherGraficComponent;
  let fixture: ComponentFixture<WeatherGraficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGraficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
