<template>
    <nav id="header" :class="(isDashboardLayout() ? 'dashboard shadow-sm':'') + ' navbar navbar-expand-lg sticky-top navbar-light'">
        <div :class="isDashboardLayout() ? 'container-fluid':'container'">
            <router-link to="/" class="navbar-brand mr-5">
                <img src="../assets/logo.png" style="height: 40px;" />
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="(isDashboardLayout() ? 'ml-5 ':'') + 'collapse navbar-collapse'" id="navbarHeader">
                <ul :class="'navbar-nav ' + (isDashboardLayout() ? '':'ml-auto')">
                    <li class="nav-item px-2">
                        <router-link to="/" exact class="nav-link">{{ $t('header.home') }} <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/ico" exact class="nav-link">{{ $t('header.ico') }}</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/services" exact class="nav-link">{{ $t('header.services') }}</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/pricing" exact class="nav-link">{{ $t('header.pricing') }}</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <a href="//docs.seedstorm.io" target="_blank" class="nav-link">{{ $t('header.documentation') }}</a>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/support" exact class="nav-link">{{ $t('header.support') }}</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 ml-auto my-lg-0">
                    <ButtonCTA to="/create-account" :class="isDashboardLayout() ? 'tiny':''" v-if="!logged" :value="$t('header.getstarted')" />
                    <ButtonCTA to="/dashboard" :class="isDashboardLayout() ? 'tiny':''" v-if="logged" :value="$t('header.mydashboard')" />
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
  data() {
    return {
      logged: false,
      fullname: ''
    }
  },
  methods: {
    isDashboardLayout() {
      return this.$route.meta.layout == "dashboard";
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        var navbar = document.getElementById("header")
        if (document.documentElement.scrollTop >= 40) {
          if (navbar.classList.contains("shrink") === false) {
            navbar.classList.toggle("shrink");
          }
        } else {
          if (navbar.classList.contains("shrink") === true) {
            navbar.classList.toggle("shrink");
          }
        }
      })
    })

    if (localStorage.getItem("Token")) {
      this.logged = true;
      this.fullname = "Clint";
    }
  }
}
</script>

<style scoped>
#header:not(.shrink)
{
    padding: 25px 20px;
}
#header:not(.shrink).dashboard
{
  padding: 17px 50px;
}

#header
{
    transition: box-shadow 0.3s ease-out;
}

.shrink
{
    background-color: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
    padding: 25px 0;
}

.navbar-light .navbar-nav .nav-link {
  display: inline-block;
  position: relative;
  padding: 5px 0px;
  margin: 8px;
}

/* .navbar-light .navbar-nav .nav-item.active .nav-link::after, */
.navbar-light .navbar-nav .nav-link.router-link-active::after,
.navbar-light .navbar-nav .nav-link::after
 {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

/* .navbar-light .navbar-nav .nav-item.active .nav-link::after, */
.navbar-light .navbar-nav .nav-link.router-link-active::after,
.navbar-light .navbar-nav .nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
