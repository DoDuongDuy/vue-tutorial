<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <TagCloud :cposts="posts"/>
      <PostList :cposts="postWithTag"></PostList>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue"
import TagCloud from "../components/TagCloud.vue"
import Spinner from "../components/Spinner.vue"
import getPosts from "../composable/getPosts.js"
import { useRoute } from "vue-router";
import { computed } from 'vue';
export default {
  components: { PostList, Spinner, TagCloud  },
  setup() {
    const route = useRoute();
    console.log(route.params.tag);
    const { posts, error, load } = getPosts();
    load();
    const postWithTag = computed(() => {
      return posts.value.filter(p => p.tags.includes(route.params.tag))
    })
    return { error, posts, postWithTag };
  },
};
</script>

<style></style>

