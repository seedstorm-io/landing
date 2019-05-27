<template>
    <div id="disqus_thread" class="pt-3"></div>
</template>

<script>
import Section from './Section'

export default {
    name: "Disqus",
    methods: {
        hashCode(s){
            return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
        }
    },
    mounted()
    {
        var disqus_config = function () {
            this.page.url = "https://seedstorm.io" + this.$route.path;
            this.page.identifier = this.hashCode(this.$route.path);
        };
        (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://clicksguard-io.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    }
    
}
</script>

<style scoped>

</style>
