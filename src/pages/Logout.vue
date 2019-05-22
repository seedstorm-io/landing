<template>
    <div>
    </div>
</template>

<script>
import { endpoint } from '../environment.js'

export default {
  name: 'Logout',
    //   CookieLaw
  mounted()
  {
      localStorage.removeItem("Token")
      document.location.replace("/")
    //   this.$router.push("/index")
    //   location.reload()
  }
}
</script>

<style scoped>
section
{
    border-top: 1px solid #eeeeee;
    background-color: #f5f5f5;
    padding: 130px 0 150px;
    height: calc(100vh - 158px)
}

.inner
{
    width: 360px
}

.form-group
{
    text-align: left;
}
</style>