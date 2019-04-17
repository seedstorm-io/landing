<template>
    <nav id="banner" class="navbar navbar-expand-lg navbar-light small py-0">
        <div class="container">
            <span class="navbar-text inner">
                SeedStorm.io | The Blockchain Hosting Platform for everybody.
            </span>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create-account" class="nav-link">Create Account</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="lang-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="flag-icon flag-icon-gb"></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="lang-dropdown">
                            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-gb"></span> &nbsp;English</a>
                            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-fr"></span> &nbsp;French</a>
                            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-es"></span> &nbsp;Spanish</a>
                            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-cn"></span> &nbsp;Chinese</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="more-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="more-dropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import '../../node_modules/flag-icon-css/css/flag-icon.min.css'

export default {
  name: 'Banner',
  props: {
    msg: String
  },
  mounted() {
      }
}
</script>

<style scoped>
#banner {
    background-color: #fafafa;
    color: #AAAAAA;
    height: 40px;
}

#header.navbar-light .navbar-nav .nav-link {
    color: #697A89 !important;
    font-weight: 500;
}

.search
{
    font-size: 10pt;
    border-color: transparent;
    width: 120px;
    height: 25px;
    margin: 10px 0;
}
</style>
