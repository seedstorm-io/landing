<template>
    <Hero>
        <div class="container">
            <h1 class="display-4 native font-weight-500">Error 404</h1>
            <p>The requested page is not found or have been moved.</p>
        </div>
    </Hero>
</template>

<script>
import Hero from '../components/Hero.vue'

export default {
  name: 'Error404',
  components: {
      Hero
  }
}
</script>

<style scoped>
</style>