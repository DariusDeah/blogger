<template>
  <div class="col-md-3 m-2">
    <div class="card">
      <div class="card-title">
        <img :src="blog.imgUrl" class="card-img-top" alt="...">
      </div>
      <div class="card-body" style="overflow-y:scroll; height:10rem;">
        <h5>
          {{ blog.title }}
        </h5>
        <p class="text-clip">
          {{ blog.body }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { BlogModel } from '../models/BlogModel'
import { blogService } from '../services/BlogService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  props: {
    blog: { type: BlogModel, required: true }
  },
  setup() {
    return {
      blogs: computed(() => AppState.blogs),
      async getBlog(props) {
        try {
          await blogService.getPosts()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>
.card{
  width: 20rem;

}
</style>
