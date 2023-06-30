export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.icon = data.weather.icon

  }

  // get computedTempC() {
  //   const celc = 273.15
  //   return ${ this.temp } - celc

  // }

  get weatherTemplate() {
    return `
    <p>${this.temp}</p>
    <i class="mdi mdi-cloud"></i>
    <img src="${this.icon}" alt="icon">

    `


  }
}