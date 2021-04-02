<template>
<h1>Post list</h1>
  <div class="post-list">
      <div v-for="cpost in cposts" :key="cpost.id">
          <SinglePost :cpost="cpost"></SinglePost>
      </div>
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost.vue"
export default {
    components:{SinglePost},
    props:['cposts'],
    setup(props) {
        console.log(props.cposts)
    }
}
</script>

<style>

</style>