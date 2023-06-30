import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { setText } from "../utils/Writer.js";

function _drawQuote() {
  const quote = AppState.quoteOfDay.content
  setText('quote', quote)
}

export class QuotesController {
  constructor() {
    this.getQuote()
    AppState.on('quoteOfDay', _drawQuote)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}

