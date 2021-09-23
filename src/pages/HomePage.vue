<template>
  <div class="container">
    <div class="row m-1 p-1">
      <Blogs v-for="b in blogs " :key="b.id" :blog="b" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { blogService } from '../services/BlogService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(() => {
      blogService.getPosts()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
