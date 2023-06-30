import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

function _drawBackground() {
  const image = AppState.backgroundImage
  const docBody = document.body
  docBody.style.backgroundImage = `url(${image.imgUrl})`

}

export class ImageController {



  constructor() {
    console.log('image controller');

    this.drawImage()
    AppState.on('backgroundImage', _drawBackground)
  }

  async drawImage() {
    try {
      imageService.drawImage()
    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

}