<template>
    <div>
        <section style="background-color: #fafafa; padding: 500px;">
            <div class="container">
            </div>
        </section>
        <CallToAction content="Don't loose money, stake your coins on SeedStorm.io" button="Get Started" />
    </div>
</template>

<script>
// import Hero from '../components/Hero.vue'
import CallToAction from '../components/CallToAction.vue'

export default {
  name: 'Dashboard',
  components: {
    //   Hero,
      CallToAction
  }
}
</script>

<style scoped>
section
{
    border-top: 1px solid #eeeeee;
}
</style>