<template>
    <vue-markdown v-if="this.source !== null" :source="this.source"></vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    components: {
        VueMarkdown
    },
    data() {
        return {
            source: null
        }
    },
    mounted() {
        this.source = this.$slots["default"][0]["text"]
    }
}
</script>
