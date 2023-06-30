export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.icon = data.weather.icon

  }

  get weatherTemplate() {
    return `
    <p>${this.temp}</p>
    <i class="mdi mdi-cloud"></i>
    `
  }
}