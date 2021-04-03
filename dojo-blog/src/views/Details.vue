<template>
  <div v-if="error"> {{error}} </div>
  <div v-if="post" class="post">
    <h3> {{post.title}} </h3>
    <p class="pre"> {{post.body}} </p>
  </div>
  <div v-else> 
      <Spinner></Spinner>
     </div>
</template>

<script>
import getPost from "../composable/getPost.js";
import Spinner from "../components/Spinner.vue"
import {useRoute} from "vue-router"
export default {
  components:{Spinner},
  props: ["id"],
  setup(props) {
    const route = useRoute()
    // const { post, error, load } = getPost(props.id);
    const {post, error, load} = getPost(route.params.id);
    load();
    return {post, error}
  },
};
</script>

<style lang="scss">
  .post{
    max-width: 1000px;
    margin: 0 auto;
    p{
      color: #444;
      line-height: 1.5rem;
      margin-top: 40px;
    }
  }
  .pre{
    white-space: pre-wrap;
  }
</style>
