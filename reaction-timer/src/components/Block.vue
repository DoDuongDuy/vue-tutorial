<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me!!
  </div>
</template>

<script>
export default {
  props: ["delayP"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTimer: 0,
    };
  },
  mounted() {
    console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delayP);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTimer += 10;
        // console.log(this.reactionTimer);
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      // console.log(this.reactionTimer)
      this.$emit("end", this.reactionTimer);
    },
  },
  updated() {
    // console.log(this.delayP);
  },
  unmounted() {
    // console.log('unmounted')
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
