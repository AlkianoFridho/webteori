<template>
    <div>
      <Header />
      <section class="login">
        <h1 class="heading">Create <span>Your Account</span></h1>
        <form @submit.prevent="registerUser ">
          <div class="input-container">
            <i class="fas fa-user"></i>
            <input type="text" name="username" placeholder="Enter your username" required />
          </div>
          <div class="input-container">
            <i class="fas fa-envelope"></i>
            <input type="email" name="email" placeholder="Enter your email" required />
          </div>
          <div class="input-container">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Enter your password" required />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn">Sign Up</button>
            <p>Already have an account? <router-link to="/login" class="link">Login</router-link></p>
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
    name: "Register",
    components: {
      Header,
      Footer,
    },
    methods: {
      registerUser () {
        // Registration logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>