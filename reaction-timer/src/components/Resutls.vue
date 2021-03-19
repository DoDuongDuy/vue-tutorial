<template>
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank"> {{rank}}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 500) {
      this.rank = "Ninja finger";
    } else if (this.score < 1000) {
      this.rank = "rapid reflexes";
    }
  },
};
</script>

<style>
    .rank{
        font-size: 1.4rem;
        color: #0faf87;
        font-weight: bold;
    }
</style>
