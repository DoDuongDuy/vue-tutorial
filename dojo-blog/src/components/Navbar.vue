<template>
  <header>
    <h1>Duy - blog</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }"> Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  h1 {
    color: #ff8800;
    font-size: 48px;
  }
  a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
    &.router-link-active {
      color: #ff8800;
      font-weight: bold;
    }
  }
}
</style>
