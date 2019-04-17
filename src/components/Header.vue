<template>
    <nav id="header" class="navbar navbar-expand-lg sticky-top navbar-light">
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
  },
  mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("header")
          if(document.documentElement.scrollTop >= 40) {
            if (navbar.classList.contains("shrink") === false) {
              navbar.classList.toggle("shrink");
            }
          }
          else {
            if (navbar.classList.contains("shrink") === true) {
              navbar.classList.toggle("shrink");
            }
          }
        })
      })
    },
}
</script>

<style scoped>
#header:not(.shrink)
{
    margin-top: 25px;
}

.shrink
{
    background-color: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
    padding: 25px 0;
}

#header
{
    transition: box-shadow 0.3s ease-out;
}
</style>
