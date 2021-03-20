<template>
  <h1>Reation timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delayP="delay" @end="endGame"></Block>
  <!-- <p v-if="showResult">Recaction time: {{ score }} ms</p> -->
  <Results v-if="showResult" :score="score"></Results>
</template>

<script>
import Block from "./components/Block";
import Results from "./components/Resutls";
export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
    },
    endGame(reactionTimer) {
      this.score = reactionTimer;
      this.isPlaying = false;
      console.log(this.score);
      this.showResult = true;
    },
  },
};
</script>

<style>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background-color: #0faf87;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
