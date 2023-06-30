import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

function _drawWeather() {
  const weather = AppState.weatherData
  setText('weather', weather)
}

export class WeatherController {
  constructor() {
    console.log('weather troller');
    this.getWeather()
    AppState.on('weatherData', _drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}