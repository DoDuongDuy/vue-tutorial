<template>
  <div class="tag-cloud">
    <h2>Tags</h2>
    <div v-for="tag in tags">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "../composable/useTags.js";
export default {
  props: ["cposts"],
  setup(props) {
    const { tags } = useTags(props.cposts);
    return { tags };
  },
};
</script>

<style lang="scss">
.tag-cloud {
  padding: 10px;
  h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  div {
    display: inline-block;
    padding: 10px;
  }
  a {
    font-size: 1.5rem;
    color: #ccc;
    &:hover{
        color: #ff8800;
    }
    text-decoration: none;
    &.router-link-active {
      color: #ff8800;
      font-weight: bold;
    }
  }
}
</style>
