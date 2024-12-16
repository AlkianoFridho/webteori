<template>
  <div>
    <Header />
    <!-- HOME -->
    <section class="home" id="home">
      <div class="row">
        <div class="content">
          <h3>fresh coffee in the morning</h3>
          <a href="/menu" class="btn2">buy one now</a>
        </div>
        
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="about">
      <h1 class="heading">about us <span>why choose us</span></h1>

      <div class="row">
        <div class="image">
          <img src="../assets/image/about-img.png" alt="">
        </div>

        <div class="content">
          <h3 class="title">Apa yang membuat kita special?</h3>
          <p>Karena kita menggunakan Kopi Arabika salah satu jenis kopi yang paling populer dan dikenal
            dengan cita rasa halus serta kompleksitasnya. Kopi ini tumbuh di dataran tinggi dengan iklim sejuk,
            yang memberikan karakteristik unik pada setiap bijinya.</p>
          <div class="icons-container">
            <div class="icons">
              <img src="../assets/image/about-icon-1.png" alt="">
              <h3>quality coffee</h3>
            </div>
            <div class="icons">
              <img src="../assets/image/about-icon-2.png" alt="">
              <h3>our branches</h3>
            </div>
            <div class="icons">
              <img src="../assets/image/about-icon-3.png" alt="">
              <h3>free delivery</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MENU -->
    <section id="menu1" class="menu">
      <h1 class="heading">our menu<span>Popular Menu</span></h1>

      <div class="box-container">
        <!-- Menu Item -->
        <div class="box">
          <img src="../assets/image/menu-4.png" alt="Espresso">
          <div class="content">
            <h3>The Misch</h3>
            <p>Teh Oolong Klasik Dengan Perpaduan Krim Lemon.</p>
            <span>Rp 28.000</span>
            
          </div>
        </div>
        <div class="box">
          <img src="../assets/image/menu-1.png" alt="Espresso">
          <div class="content">
            <h3>Strato Wave</h3>
            <p>Shakerato Dengan Sirup Strawberry Lemon Espresso.</p>
            <span>Rp 28.000</span>
            
          </div>
        </div>
        <div class="box">
          <img src="../assets/image/menu-2.png" alt="Espresso">
          <div class="content">
            <h3>Lahaina</h3>
            <p>Sirup Mangga Dengan Perpaduan Sirup Curacau Yang Segar.</p>
            <span>Rp 23.000</span>
            
          </div>
        </div>
        <div class="box">
          <img src="../assets/image/menu-3.png" alt="Espresso">
          <div class="content">
            <h3>Major Mayor</h3>
            <p>Perpaduan Espresso dan Syrup Rum Dengan Foam Jeruk.</p>
            <span>Rp 28.000</span>
           
          </div>
        </div>
      </div>
    </section>

    <!-- Snack Menu Section -->
    <section id="menu2" class="menu">
      <h1 class="heading">our menu<span>SNACK & FOOD</span></h1>

      <div class="box-container">
        <!-- Menu Item -->
        <div class="box">
          <img src="../assets/image/menu-5.png" alt="Espresso">
          <div class="content">
            <h3>Cwi Mie Spesial</h3>
            <p>Daging ayam cincang berbumbu, Bakso atau pangsit goreng, Tauge dan daun bawang, Taburan bawang
              goreng.</p>
            <span>Rp 18.000</span>
            
          </div>
        </div>
        <div class="box">
          <img src="../assets/image/menu-6.png" alt="Espresso">
          <div class="content">
            <h3>Nasi Panggang Sampean</h3>
            <p>Nasi + Ayam + Keju Melty + Pilihan Saus.</p>
            <span>Rp 30.000</span>

          </div>
        </div>
      </div>
      <div class="menu-actions">
        <button class="btn order-btn" @click="redirectToOrder">Order Now</button>
      </div>
    </section>

    <!-- REVIEW -->
    <section class="review" id="review">
        <h1 class="heading">reviews <span>what people says</span></h1>

        <div class="swiper review-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide box">
                    <i class="fas fa-quote-left"></i>
                    <i class="fas fa-quote-right"></i>
                    <img src="../assets/image/pic-1.png" alt="">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur
                        illum.</p>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                </div>

                <div class="swiper-slide box">
                    <i class="fas fa-quote-left"></i>
                    <i class="fas fa-quote-right"></i>
                    <img src="../assets/image/pic-2.png" alt="">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam
                        assumenda.</p>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                </div>

                <div class="swiper-slide box">
                    <i class="fas fa-quote-left"></i>
                    <i class="fas fa-quote-right"></i>
                    <img src="../assets/image/pic-3.png" alt="">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis!
                        Eligendi, aliquam.</p>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                </div>

                <div class="swiper-slide box">
                    <i class="fas fa-quote-left"></i>
                    <i class="fas fa-quote-right"></i>
                    <img src="../assets/image/pic-4.png" alt="">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio
                        velit aliquid a.</p>
                    <h3>john deo</h3>
                    <span>satisfied client</span>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <!-- BOOK -->
    <section class="book" id="book">
      <h1 class="heading">booking <span>reserve a table</span></h1>
      <form action="">
        <input type="text" placeholder="Name" class="box">
        <input type="email" placeholder="Email" class="box">
        <input type="number" placeholder="Number" class="box">
        <textarea placeholder="Message" class="box" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" class="btn">
      </form>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
 // Import Swiper's styles

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // Swiper setup for the review slider
    new Swiper(".review-slider", {
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });
    
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const product = e.target.closest('.box');
        const name = product.querySelector('h3').textContent;
        const price = product.querySelector('span').textContent;

        // Get existing cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(item => item.name === name);
        if (existingItemIndex > -1) {
          cartItems[existingItemIndex].quantity += 1;
        } else {
          cartItems.push({
            name: name,
            price: price,
            quantity: 1,
          });
        }

        // Save the updated cart items to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update the cart count displayed
        if (cartCount) {
          cartCount.textContent = cartItems.length;
        }
      });
    });
  },
  methods: {
    redirectToOrder() {
      // Handle redirect to order page
      window.location.href = "/menu";
    }
  },
};
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>
