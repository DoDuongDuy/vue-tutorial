<template>
  <h1>Job details</h1>
  <div v-if="job">
    <h2> {{job.title}} </h2>
    <p> {{job.id}} </p>
    <p> {{job.details}} </p>
  </div>
  <div v-else="job">
    Loading job.....
  </div>
</template>

<script>
export default {
  props: ["id_detail"],
  data() {
    return {
      job: null,
    };
  },
  //  data(){
  //    return{
  //      ID : this.$route.params.id,
  //    }
  //  }
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id_detail)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((e) => console.log(e.message));
  },
};
</script>

<style></style>
