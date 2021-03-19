<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <slot></slot>
      <div class="action">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}
.modal.sale {
  background-color:white ;
}
.modal.sale .action {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal.sale .action a {
  color: #333;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale h1 {
  color: turquoise;
}
.modal.sale .action {
  color: white;
}
</style>
