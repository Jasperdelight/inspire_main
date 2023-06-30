import { AppState } from "../AppState.js"
import { QuoteOfDay } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuotesService {

  async getQuote() {
    const res = await api.get('api/quotes')
    const newQuote = new QuoteOfDay(res.data)
    console.log('quote data', newQuote)
    AppState.quoteOfDay = newQuote
  }
}
export const quotesService = new QuotesService()