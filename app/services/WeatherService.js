import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {

  async getWeather() {
    const res = await api.get('api/weather')
    console.log('weather data from api', res.data)
    const builtWeather = new Weather(res.data)
    // console.log('weather data', builtWeather)
    AppState.weatherData = builtWeather
  }
}
export const weatherService = new WeatherService
