<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <!-- <div class="loader" style="
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 777;
    display: flex;
    align-items: center;
    background-color: white;">
      <breeding-rhombus-spinner :animation-duration="2000" :size="65" color="#000000" />
    </div> -->
    <Banner />
    <Header />
    <router-view></router-view>
    <Footer />
    <!-- <cookie-law law theme="dark-lime">
      <div slot="message">
        Here is my message for more info <router-link to="privacy-policy">Click here</router-link>
      </div>
    </cookie-law> -->
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
// import { BreedingRhombusSpinner } from 'epic-spinners'
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CookieLaw from 'vue-cookie-law'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

export default {
  name: 'app',
  components: {
    NprogressContainer,
    Banner,
    Header,
    Footer,
    CookieLaw
    // BreedingRhombusSpinner
  },
  mounted()
  {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600');

#app
{
    font-family: 'Source Sans Pro', sans-serif;
    background-image: url(assets/background.png);
    background-size: 3400px 900px;
    background-position-x: center;
    background-position-y: 120px;
    background-repeat: no-repeat;
}

.native {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
}

a {
    color: #007bff;
}

.shadow {
    -webkit-box-shadow: 0 -2px 40px rgba(142, 156, 172, 0.2) !important;
    box-shadow: 0 -2px 40px rgba(142, 156, 172, 0.2) !important;
}

.accent {
    color: #007bff;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 12px;
}

.font-weight-500 {
    font-weight: 500;
}
</style>
