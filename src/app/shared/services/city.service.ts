import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UrlHolder } from "../data/url.data";

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {}

  getCityList(cityName: string): Observable<any> {
    return this.http.get(UrlHolder.CITY_API + cityName);
  }
}
