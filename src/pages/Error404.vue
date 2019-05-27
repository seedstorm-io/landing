<template>
    <section class="bg-light">
        <Hero>
            <div class="container">
                <h1 class="display-4 native font-weight-500">Error 404</h1>
                <p>The requested page is not found or have been moved.</p>
            </div>
        </Hero>
    </section>
</template>

<script>
import Hero from '../components/Hero'

export default {
  name: 'Error404',
  components: {
      Hero
  }
}
</script>

<style scoped>
section
{
    border-top: 1px solid #eeeeee;
    padding: 100px 0;
}
</style>