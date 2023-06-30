export class Image {
  constructor(data) {
    this.tags = data.tags
    this.imgUrl = data.largeImgUrl
    this.query = data.query
    this.author = data.author
  }
}