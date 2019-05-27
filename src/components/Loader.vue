<template>
  <div id="loader" class="loader">
      <half-circle-spinner :animation-duration="1000" :size="40" color="#555555" />
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'

export default {
  name: 'Loader',
  components: {
    HalfCircleSpinner
  }
}
</script>