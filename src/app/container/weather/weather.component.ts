import { Component, OnInit } from "@angular/core";
import { Weather } from "src/app/shared/models/weather.model";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  weather: Weather;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentWeather.subscribe(
      weather => (this.weather = weather)
    );
  }
}
