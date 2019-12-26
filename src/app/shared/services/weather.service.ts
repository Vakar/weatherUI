import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UrlHolder } from "../data/url.data";

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(cityId: number): Observable<any> {
    return this.http.get(UrlHolder.WEATHER_API + cityId);
  }
}
