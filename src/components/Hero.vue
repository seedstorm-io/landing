<template>
  <div class="hero bg-transparent text-center">
        <slot />
    </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hero {
    padding: 130px 0;
}

.hero h1 {
    margin-bottom: 45px;
}

.hero p {
    color: #444;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 25px;
}

</style>
