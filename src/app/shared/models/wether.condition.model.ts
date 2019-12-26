export class WeatherCondition {
  description: string;
  iconUrl: string;
  constructor(description: string, iconUrl: string) {
    this.description = description;
    this.iconUrl = "http://openweathermap.org/img/wn/" + iconUrl + "@2x.png";
  }
}
