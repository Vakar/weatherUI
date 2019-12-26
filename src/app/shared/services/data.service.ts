import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Weather } from "../models/weather.model";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<string>(null);
  private weatherSource = new BehaviorSubject<Weather>(null);

  currentMessage = this.messageSource.asObservable();
  currentWeather = this.weatherSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeWeather(weather: Weather) {
    this.weatherSource.next(weather);
  }
}
