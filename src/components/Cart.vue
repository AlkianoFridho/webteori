<template>
  <div>
    <Header />
    <section class="cart-section">
      <h1 class="heading">Your <span>Cart</span></h1>
      <div class="cart-items">
        <!-- Render cart items -->
        <div v-if="cart.length > 0" v-for="(item, index) in cart" :key="index" class="cart-item">
          <img :src="item.image" alt="Item Image" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p>Price: Rp {{ item.price }}.000</p>
            <p>Quantity: {{ item.quantity }}</p>
            <div class="cart-item-actions">
              <button @click="increaseQuantity(index)" class="btn">+</button>
              <button @click="decreaseQuantity(index)" class="btn">-</button>
              <button @click="removeFromCart(index)" class="btn remove-btn">Remove</button>
            </div>
          </div>
        </div>
        <!-- Display when cart is empty -->
        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </div>
      <!-- Checkout button and navigation -->
      <div v-if="cart.length > 0" class="form-actions">
        <router-link to="/menu" class="btn back-to-home">Back to Menu</router-link>
        <button class="btn" @click="proceedToCheckout">Proceed to Checkout</button>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [] // Fetch cart data from localStorage
    };
  },
  methods: {
    // Increase the quantity of a cart item
    increaseQuantity(index) {
      this.cart[index].quantity += 1;
      this.updateCart();
    },
    // Decrease the quantity of a cart item
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
        this.updateCart();
      } else {
        // Remove the item if quantity is less than or equal to 1
        this.removeFromCart(index);
      }
    },
    // Remove an item from the cart
    removeFromCart(index) {
      this.cart.splice(index, 1); // Remove the item at the given index
      this.updateCart();
    },
    // Save updated cart data to localStorage
    updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    // Proceed to checkout
    proceedToCheckout() {
      if (this.cart.length === 0) {
        alert('Your cart is empty.');
        return;
      }

      const summary = this.cart.map(item => `${item.name} (x${item.quantity})`).join('\n');
      alert(`Checkout successful!\n\nItems:\n${summary}`);
      
      // Clear the cart after checkout
      this.cart = [];
      this.updateCart();
    },
  },
  mounted() {
    // Load cart items when the component is mounted
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  },
};
</script>

<style scoped>
.cart-section {
  padding: 20px;
}

.cart-item {
  display: flex;
  margin-bottom: 15px;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-actions button {
  margin: 0 5px;
}

.remove-btn {
  background-color: red;
  color: white;
}

.form-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.back-to-home {
  background-color: #2196F3;
}
</style>
