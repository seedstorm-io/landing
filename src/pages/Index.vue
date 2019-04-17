<template>
    <div>
        <Hero>
            <div class="container">
                <h1 class="display-4 native font-weight-500">
                    <vue-typer text='Blockchain Hosting Platform' :type-delay='120' :repeat='0' caret-animation='smooth'></vue-typer>
                </h1>
                <p><a href="">SeedStorm.io</a> provide a blockchain hosting solution for individuals or companies,<br />to host full-nodes or masternodes for security, monitoring or simply for for convenience.</p>
                <div class="form-group">
                    <Button to="/get-started" class="btn button btn-shadow btn-primary mr-2">Getting Started</Button>
                    <Button to="/explore" class="btn btn-shadow btn-dark ml-2">
                        <i class="fas fa-cubes"></i> Explore Blockchains
                    </Button>
                </div>
            </div>
        </Hero>
        <Announcement />
        <section style="background-color: #fafafa;">
            <div class="container">
                <div style="padding: 200px 0;">
                    ds
                </div>
            </div>
        </section>
        <CallToAction content="Less hassle, more masternodes. Start earning now." button="Get Started" />
    </div>
</template>

<script>
import CallToAction from '../components/CallToAction.vue'
import Hero from '../components/Hero.vue'
import Announcement from '../components/Announcement.vue'
import Button from '../components/sub/Button.vue'

export default {
  name: 'Index',
  components: {
      Hero,
      Announcement,
      Button,
      CallToAction
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>