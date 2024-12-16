<template>
    <div>
      <Header />
      <section class="login">
        <h1 class="heading">Login <span>to your account</span></h1>
        <form action="#">
          <div class="input-container">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" required />
          </div>
          <div class="input-container">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn">Login</button>
            <p>Don't have an account? <router-link to="/register" class="link">Register</router-link></p>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  export default {
    name: "Login",
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>