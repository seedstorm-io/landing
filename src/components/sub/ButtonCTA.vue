<template>
  <router-link :to="to" class="btn btn-outline-dark btn-custom my-2 my-sm-0">{{ value }}</router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
    to: String
  }
}
</script>

<style scoped>
a.btn.btn-outline-dark {
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    padding: 12px 35px;
    border-radius: 4px;
    outline: none;
    font-weight: 600;
    margin: 10px;
    white-space: normal;
}
a.btn.btn-outline-dark.tiny
{
    padding: 8px 25px;
}
</style>