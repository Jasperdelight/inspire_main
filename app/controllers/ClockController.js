import { setText } from "../utils/Writer.js";

function _drawClock() {
  const time = new Date()
  const stringTime = time.toUTCString()
  setText('theTime', stringTime)
}

export class ClockController {
  constructor() {
    console.log('clock controller loaded');
    _drawClock()
    setInterval(_drawClock, 1000)
  }
}