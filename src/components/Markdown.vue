<template>
    <div id="content"></div>
</template>

<script>
import marked from "marked"

export default {
    mounted()
    {
        document.getElementById("content").innerHTML = marked(this.$slots["default"][0]["text"])
    }
}
</script>
