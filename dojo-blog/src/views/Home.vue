<template>
  <div class="home">
    <PostList :cposts="posts" ></PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import { computed, ref, watch, watchEffect } from "vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {PostList},
  setup(props) {
    const posts = ref([
      { title: "welcome to the blog", body: "lorem ipsum 1", id: 1 },
      { title: "top 5 CSS tip", body: "lorem ipsum 2", id: 2 },
    ]);

    return {posts};
  },

  // setup > created > mounted
};
</script>
