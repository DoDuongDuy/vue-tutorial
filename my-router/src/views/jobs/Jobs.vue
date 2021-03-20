<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name: 'JobDetails',params:{id_detail : job.id}}">
      <h2> {{job.title}} </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "my ux designer1", id: 1, details: "lorem1" },
        { title: "my ux designer2", id: 2, details: "lorem2" },
        { title: "my ux designer3", id: 3, details: "lorem3" },
      ],
    };
  },
};
</script>

<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        color: #444;
        cursor: pointer;
    }
    .job h2:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
    
</style>
