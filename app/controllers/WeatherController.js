import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";



function _drawWeather() {
  const weather = AppState.weatherData
  // console.log('weather in draw', weather)
  setText('weather', Math.round(weather.temp - 273.15) + 'C°')

  const weatherIcon = AppState.weatherData.icon
  // console.log('weather icon?', weatherIcon)
  const celc = true
  AppState.weatherTemp = celc
  // console.log('weather t or f', AppState.weatherTemp)


}

export class WeatherController {
  constructor() {
    // console.log('weather troller');
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

  toggleWeather() {
    const weather = AppState.weatherData


    if (AppState.weatherTemp == true) {
      const weatherF = (weather.temp - 273.15) * 9 / 5 + 32
      AppState.weatherTemp = false
      setText('weather', Math.round(weatherF) + 'F°')
    } else {
      const weatherC = (weather.temp - 273.15)
      AppState.weatherTemp = true
      setText('weather', Math.round(weatherC) + 'C°')
    }



  }
}
