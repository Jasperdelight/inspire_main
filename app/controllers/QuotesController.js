import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

function _drawQuote() {
  const quote = AppState.quoteOfDay.content
  setText('quote', quote)

}
function _drawAuthor() {
  const author = AppState.quoteOfDay.author
  console.log('author?', author)
  setText('authorQuote', author)
}

export class QuotesController {
  constructor() {
    this.getQuote()
    AppState.on('quoteOfDay', _drawQuote)
    AppState.on('quoteOfDay', _drawAuthor)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
  showAuthor() {
    const author = document.getElementById('authorQuote')
    author.classList.remove('d-none')
  }
}

