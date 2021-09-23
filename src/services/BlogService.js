import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BlogService {
  async getPosts() {
    const res = await api.get()
    logger.log(res.data)
  }
}
export const blogService = new BlogService()
