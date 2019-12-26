import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(cityId: number): Observable<any> {
    return this.http.get("http://rest.vakar.space/weather/weather/" + cityId);
  }
}
