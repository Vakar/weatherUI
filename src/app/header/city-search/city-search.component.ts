import { Component, OnInit } from "@angular/core";
import { City } from "src/app/shared/models/city.model";
import { CityService } from "src/app/shared/services/city.service";
import { DataService } from "src/app/shared/services/data.service";
import { WeatherService } from "src/app/shared/services/weather.service";
import { Observable } from "rxjs";
import { Weather } from "src/app/shared/models/weather.model";

@Component({
  selector: "app-city-search",
  templateUrl: "./city-search.component.html",
  styleUrls: ["./city-search.component.css"]
})
export class CitySearchComponent implements OnInit {
  inputText: string = "";
  cityList: City[] = [];
  isAutocompleteShown: boolean = false;
  cityListPointer: number = 0; // todo from 0 to cityList.length

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  findCities() {
    if (this.inputText) {
      // todo maybe validate with angular forms is a better idea
      let cityName: string = this.inputText;
      let observableCityList: Observable<any> = this.cityService.getCityList(
        cityName
      );
      observableCityList.subscribe(response => {
        this.cityList = response.map((city: any) =>
          new City().deserialize(city)
        );
        this.cityList = this.cityList.slice(0, 7);
        this.makeDecision(this.cityList);
      });
    } else {
      this.dataService.changeMessage("Please input city name!");
    }
  }

  private makeDecision(cityList: City[]): void {
    if (cityList.length == 0) {
      this.showMessage(
        "Can't find any city with name: " + this.inputText + "!"
      );
    } else if (cityList.length == 1) {
      this.showWeather(this.cityList[0]);
    } else {
      this.showAutocomplete();
    }
  }

  private showMessage(message: string) {
    this.dataService.changeWeather(null);
    this.dataService.changeMessage(message);
  }

  showWeather(city: City) {
    this.dataService.changeMessage(null);
    this.cityList = [];
    this.inputText = city.name;
    let observableWeather: Observable<any> = this.weatherService.getWeather(
      city.id
    );
    observableWeather.subscribe(response => {
      let weather: Weather = new Weather().deserialize(response);
      this.dataService.changeWeather(weather);
    });
  }

  showAutocomplete() {
    this.isAutocompleteShown = true;
    this.cityListPointer = 0;
  }

  onMouseOver(index: number) {
    this.cityListPointer = index;
  }

  keyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38: // this is the ascii of Arrow Up
        if (this.cityListPointer > 0) {
          this.cityListPointer--;
        }
        break;
      case 40: // this is the ascii of Arrow Down
        if (this.cityListPointer < this.cityList.length - 1) {
          this.cityListPointer++;
        }
        break;
      case 13: // this is the ascii of Enter
        if (this.cityList.length == 0) {
          this.findCities();
        } else {
          this.showWeather(this.cityList[this.cityListPointer]);
        }
        break;
      default:
        this.cityList = [];
        this.isAutocompleteShown = false;
        this.cityListPointer = 0;
        break;
    }
  }
}
