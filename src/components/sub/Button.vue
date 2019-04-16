<template>
  <router-link :to="to"><slot/></router-link>
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

<style>
.btn:not(.btn-custom) {
    padding: 10px 30px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 10pt;
    border-radius: 5px;
    transition: all 0.15s ease;
}

.btn.btn-shadow {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
}

.btn.btn-primary {
    background-color: #007aff;
}

.btn.btn-dark {
    background-color: #24292e;
}

.btn.btn-outline-dark {
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
</style>