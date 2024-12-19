<template>
  <div>
    <Header />
    <section id="menu" class="menu">
      <h1 class="heading">our menu<span>Popular Menu</span></h1>

      <div class="box-container">
        <!-- Menu Items -->
        <div
          class="box"
          v-for="(menu, index) in popularMenu"
          :key="index"
        >
          <img :src="menu.image" :alt="menu.name" />
          <div class="content">
            <h3>{{ menu.name }}</h3>
            <p>{{ menu.description }}</p>
            <span>Rp {{ menu.price.toLocaleString('id-ID') }}</span>
            <button @click="addToCart(menu)">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>

    <section id="menu" class="menu">
      <h1 class="heading">our menu<span>SNACK & FOOD</span></h1>

      <div class="box-container">
        <!-- Snack Items -->
        <div
          class="box"
          v-for="(menu, index) in snackMenu"
          :key="index"
        >
          <img :src="menu.image" :alt="menu.name" />
          <div class="content">
            <h3>{{ menu.name }}</h3>
            <p>{{ menu.description }}</p>
            <span>Rp {{ menu.price.toLocaleString('id-ID') }}</span>
            <button @click="addToCart(menu)">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Menu",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cart: this.initializeCart(),
      popularMenu: [
        {
          name: "The Misch",
          description: "Teh Oolong Klasik Dengan Perpaduan Krim Lemon.",
          price: 28000,
          image: ("src/assets/image/menu-4.png"),
        },
        {
          name: "Strato Wave",
          description: "Shakerato Dengan Sirup Strawberry Lemon Espresso.",
          price: 28000,
          image: "src/assets/image/menu-1.png",
        },
        {
          name: "Lahaina",
          description: "Sirup Mangga Dengan Perpaduan Sirup Curacau Yang Segar.",
          price: 23000,
          image: "src/assets/image/menu-2.png",
        },
        {
          name: "Major Mayor",
          description: "Perpaduan Espresso dan Syrup Rum Dengan Foam Jeruk.",
          price: 28000,
          image: "src/assets/image/menu-3.png",
        },
      ],
      snackMenu: [
        {
          name: "Cwi Mie Spesial",
          description:
            "Daging ayam cincang berbumbu, Bakso atau pangsit goreng, Tauge dan daun bawang, Taburan bawang goreng.",
          price: 18000,
          image: "src/assets/image/menu-5.png",
        },
        {
          name: "Nasi Panggang Sampean",
          description: "Nasi + Ayam + Keju Melty + Pilihan Saus.",
          price: 30000,
          image: "src/assets/image/menu-6.png",
        },
      ],
    };
  },
  computed: {
    cartCount() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
  methods: {
    initializeCart() {
      const savedCart = localStorage.getItem("cart");
      try {
        const parsedCart = JSON.parse(savedCart);
        return Array.isArray(parsedCart) ? parsedCart : [];
      } catch (error) {
        return [];
      }
    },
    addToCart(item) {
      const existingItemIndex = this.cart.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItemIndex > -1) {
        this.cart[existingItemIndex].quantity += 1;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
      alert(`${item.name} has been added to the cart!`);
    },
  },
};
</script>

<style scoped>

@import url("../assets/css/index.css");
</style>
