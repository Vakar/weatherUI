import { UrlHolder } from "../data/url.data";

export class WeatherCondition {
  description: string;
  iconUrl: string;
  constructor(description: string, iconName: string) {
    this.description = description;
    this.iconUrl = UrlHolder.getWeatherIconUrl(iconName);
  }
}
