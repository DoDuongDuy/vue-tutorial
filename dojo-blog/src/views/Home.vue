<template>
  <div class="home">
    <div style="color:red; text-transform:uppercase" v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <TagCloud :cposts="posts" />
      <PostList :cposts="posts"> </PostList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composable/getPosts.js";
import Spinner from "../components/Spinner.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup(props) {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },

  // setup > created > mounted
};
</script>
<style lang="scss">
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
