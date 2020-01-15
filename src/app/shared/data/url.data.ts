export class UrlHolder {
  static WEATHER_API = "http://stuff.vakar.space/weather/weather/";
  static CITY_API = "http://stuff.vakar.space/weather/city/";

  static getWeatherIconUrl(iconName: string) {
    return "http://openweathermap.org/img/wn/" + iconName + "@2x.png";
  }
}
