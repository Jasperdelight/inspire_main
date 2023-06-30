export class QuoteOfDay {
  constructor(data) {
    this.author = data.author
    this.content = data.content
    this.id = data.id
  }



  get quoteTemplate() {
    return `

    `
  }
}