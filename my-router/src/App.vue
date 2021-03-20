<template>
  <div id="nav">
    <router-link to="/homee">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>|
    <router-link :to="{ name: 'myJobs' }">Jobs</router-link>
  </div>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view />
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: brown;
}
button {
  width: 130px;
  margin: 5px 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
button:hover {
  background: brown;
  font-weight: bold;
  color: white;
}
</style>
