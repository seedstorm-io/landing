<template>
  <section class="bg-primary py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <h1 class="display-5">{{ content }}</h1>
        </div>
        <div class="col-lg-3 text-right">
          <router-link to="get-started" class="btn btn-lg btn-dark border-0 rounded-0">{{ button }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    content: String,
    button: String

  },
  components: {
  }
}
</script>

<style scoped>
section
{
  background-color: #1e87f0 !important;
  color: #EEEEEE;
}

.display-5
{
   font-size: 25pt;
}
</style>
