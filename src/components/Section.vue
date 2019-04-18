<template>
  <section class="py-5">
    <div :class="getMode()">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    mode: String
  },
  methods: {
    getMode() {
      switch(this.mode)
      {
        default:
        return "container"

        case "md":
        return "container extra"

        case "lg":
        return "container-fluid"
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 1200px) {
  .container.extra {
    max-width: 1300px !important;
  }
}
</style>
