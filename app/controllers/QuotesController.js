import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { logger } from "../utils/Logger.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

function _drawQuote() {
  const quote = AppState.quoteOfDay.content
  setText('quote', quote)

}
function _drawAuthor() {
  const author = AppState.quoteOfDay.author
  // console.log('author?', author)
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
  async changeQuote(){
    try{
        await quotesService.changeQuote()
    } catch(error) {
        Pop.error(error.message);
    }
    // logger.log('button pressed')
  }
  showAuthor() {
    const author = document.getElementById('authorQuote')
    author?.classList.remove('d-none')
  }
}

