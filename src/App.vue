<template>
  <div id="app">
    <Banner />
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

export default {
  name: 'app',
  components: {
    Banner,
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600');

#app
{
    font-family: 'Source Sans Pro', sans-serif;
    background-image: url(https://www.mozilla.org/media/img/firefox/developer/whatsnew-firstrun-hero-background.df0a60dd3a36.png);
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
