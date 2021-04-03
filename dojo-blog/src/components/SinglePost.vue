<template>
  <div class="post">
    <router-link :to="{name : 'Details' , params: {id: cpost.id} }" >
      <h2>{{ cpost.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in cpost.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["cpost"],
  setup(props) {
    const snippet = computed(() => {
      return props.cpost.body.substring(0, 100) + ".....";
    });
    return { snippet };
  },
};
</script>

<style lang="scss"></style>
