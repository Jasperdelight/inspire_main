import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"

class ImageService {

  async drawImage() {
    const res = await api.get('/api/images')
    console.log('got random image', res.data)
    const newImage = new Image(res.data)
    AppState.backgroundImage = newImage
    console.log("appstate", AppState.backgroundImage)
  }


}


export const imageService = new ImageService()