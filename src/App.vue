<template>
  <Navbar />
  <div class="box">
    <router-view>
    </router-view>
  </div>
  <CartBtn/>
  <ContactBtn />
  <scrollToTop />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import scrollToTop from './components/ScrollToTop.vue'
import ContactBtn from './components/ContactBtn.vue'
import CartBtn from './components/CartBtn.vue'


export default {
  data() {
    return {
      // 
    }
  },
  components: {
    Navbar,
    Footer,
    scrollToTop,
    ContactBtn,
    CartBtn
  },
}
</script>
