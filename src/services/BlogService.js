import { AppState } from '../AppState'
import { BlogModel } from '../models/BlogModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BlogService {
  async getPosts() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    AppState.blogs = res.data.map(b => new BlogModel(b))
    logger.log(AppState.blogs)
  }
}
export const blogService = new BlogService()
