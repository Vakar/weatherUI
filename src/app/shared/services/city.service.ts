import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {}

  getCityList(cityName: string): Observable<any> {
    return this.http.get("http://rest.vakar.space/weather/city/" + cityName);
  }
}
