import { Deserializable } from "./deserializable.model";
import { TemperatureConverterService as converter } from "../services/temperature.converter.service";
import { WeatherCondition } from "./wether.condition.model";

export class Weather implements Deserializable {
  conditions: WeatherCondition[];
  country: string;
  cityName: string;
  humidity: number;
  temperature: number;
  wind: number;
  icon: string;

  deserialize(input: any): this {
    this.country = input.sys.country;
    this.cityName = input.name;
    this.humidity = input.main.humidity;
    this.temperature = converter.kelvinToCelsius(input.main.temp);
    this.wind = input.wind.speed;
    this.icon = input.weather[0].icon;
    this.conditions = input.weather.map(
      (item: any) => new WeatherCondition(item.description, item.icon)
    );
    return this;
  }
}
