export class TemperatureConverterService {
  static kelvinToFahrenheit(kelvin: number): number {
    let celsius = this.kelvinToCelsius(kelvin);
    let fahrenheit = celsius * (9 / 5) + 32;
    return Math.round(fahrenheit * 100) / 100;
  }

  static kelvinToCelsius(kelvin: number): number {
    let celsius = kelvin - 273.15;
    return Math.round(celsius * 100) / 100;
  }
}
