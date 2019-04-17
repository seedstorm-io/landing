<template>
  <router-link :to="to"><slot/></router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: String
  },
  methods: {
    greet() {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      alert('Bonjour ')
    }
  }
}
</script>

<style>

</style>