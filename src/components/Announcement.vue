<template>
    <div class="container">
        <div class="jumbotron bg-white shadow rounded">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Announcement'
}
</script>

<style scoped>
.jumbotron p {
    color: #697A89;
    margin-bottom: 40px;
    font-size: 14px;
}
</style>
