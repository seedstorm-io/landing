<template>
    <nav class="header navbar navbar-expand-lg navbar-light mt-4">
        <div class="container">
            <router-link to="/" class="navbar-brand mr-5 ">
                <img src="../assets/logo.png" style="height: 40px;" />
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item px-2">
                        <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/services" class="nav-link">Services</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/pricing" class="nav-link">Pricing</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/documentation" class="nav-link">Documentation</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/support" class="nav-link">Support</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <ButtonCTA to="/get-started" value="Get Started" />
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import ButtonCTA from '../components/sub/ButtonCTA.vue'

export default {
  name: 'Menu',
  components: {
    ButtonCTA
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header
{

}
</style>
