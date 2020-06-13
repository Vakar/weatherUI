export class UrlHolder {
  static WEATHER_API = "http://3.22.165.240:8080/weather/";
  static CITY_API = "http://3.22.165.240:8080/city/";

  static getWeatherIconUrl(iconName: string) {
    return "http://openweathermap.org/img/wn/" + iconName + "@2x.png";
  }
}
