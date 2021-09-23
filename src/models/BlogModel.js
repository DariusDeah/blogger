export class BlogModel {
  constructor(modelData) {
    this.id = modelData.id
    this.body = modelData.body
    this.imgUrl = modelData.imgUrl
    this.title = modelData.title
    this.creatorId = modelData.creatorId || {}
    this.creator = modelData.creator
    this.createdAt = modelData.createdAt
    this.published = modelData.published
  }
}
