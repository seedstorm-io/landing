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
        return "container large"

        case "lg":
        return "container-fluid"
      }
    }
  }
}
</script>

<style scoped>
</style>
