<template>
  <header class="header">
    <router-link to="/" class="logo">coffee <i class="fas fa-mug-hot"></i></router-link>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/login">Account</router-link>
    </nav>
    <div class="cart">
      <router-link to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">{{ cartCount }}</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    cartCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>
