<template>
  <h1>{{ title }}</h1>
  <p>wellcome...</p>
  <teleport to='#Modal' v-if="showModal">
    <Modal :header="headerapp" theme="sale" @close="toggleModal">
      <p>{{ textcontentapp }}</p>
      <template v-slot:links>
        <a href="#"> sign up now</a>
        <a href="#"> more info</a>
      </template>
    </Modal>
  </teleport>
  <div v-if="showModalTwo">
    <Modal :header="headerapp" @close="toggleModalTwo">
      <p> {{textcontentapp}} - 2 </p>
    </Modal>
  </div>
  <button @click.shift="toggleModal">open modal (shift + click)</button>
  <button @click="toggleModalTwo">open modal 2</button>
</template>
<script>
import Modal from "./components/Modal";
// import Modal from './components/Modal.vue';
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app",
      headerapp: "Sign up for the giveaway!!",
      textcontentapp: "Grap your ninja swag half price",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.toggle("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app, #Modal{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
