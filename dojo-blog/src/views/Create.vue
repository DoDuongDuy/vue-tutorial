<template>
  <div class="create">
      <form>
          <label>Title:</label>
          <input v-model="title" type="text">
          <label>Content</label>
          <textarea v-model="body"></textarea>
          <label>Tags (hit enter to add a tag)</label>
          <input 
          v-model="tag" 
          type="text"
          @keydown.enter.prevent="handleKeydown"
          >
          <button>Add Post</button>
      </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup(props) {
        const title = ref('');
        const body = ref('');
        const tag = ref('');
        const tags = ref([])
        const handleKeydown = ()=>{
            console.log(title, body, tag)
        }


        return {title , body , tag, handleKeydown }
    }

}
</script>

<style>

</style>