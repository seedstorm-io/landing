<template>
    <nav id="banner" class="navbar navbar-expand-lg navbar-light small py-0">
        <div class="container">
            <span class="navbar-text inner">
                {{ latestNews.title }}
                <a :href="latestNews.link" target="_blank" class="ml-1 inherit">Read More</a>
            </span>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="login" v-if="!logged" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="create-account" v-if="!logged" class="nav-link">Create Account</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="dashboard" v-if="logged" class="nav-link">Welcome back Clint</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="logout" v-if="logged" class="nav-link">Logout</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i class="far fa-smile"></i></a>
                        <div class="dropdown-menu shadow border-0 feedback">
                            <form class="px-3 py-1 pb-3" v-on:submit="submitFeedback" action="#">
                                <div class="form-group">
                                    <label>Enter Feedback</label>
                                    <textarea class="form-control" v-model="feedback" required rows="5" placeholder="Suggest a new feature or simply send us a feedback"></textarea>
                                </div>
                                <button type="submit" class="btn btn-block btn-xs btn-outline-primary">Post Feedback</button>
                            </form>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="lang-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="flag-icon flag-icon-gb"></span>
                        </a>
                        <div class="dropdown-menu shadow border-0" aria-labelledby="lang-dropdown">
                            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-gb"></span> &nbsp;English</a>
                            <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-fr"></span> &nbsp;French</a>
                            <!-- <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-es"></span> &nbsp;Spanish</a> -->
                            <!-- <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-cn"></span> &nbsp;Chinese</a> -->
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="more-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow border-0" aria-labelledby="more-dropdown">
                            <router-link to="about" class="dropdown-item">About SeedStorm</router-link>
                            <router-link to="about" class="dropdown-item">API Reference</router-link>
                            <router-link to="blog" class="dropdown-item">Read our Blog</router-link>
                            <div class="dropdown-divider" />
                            <router-link to="about" class="dropdown-item text-primary">Download stormctl</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { endpoint } from '../environment.js'
import axios from 'axios'
import '../../node_modules/flag-icon-css/css/flag-icon.min.css'

export default {
    name: 'Banner',
    data() {
        return {
            feedback: null,
            latestNews: {},
            logged: false
        }
    },
    methods: {
        submitFeedback(event) {
            // axios
            // .post("//api.seedstorm.io/api/feedbacks", { feedback: this.feedback })
            // .then(response => {
            //     this.$snackbar.show({text: "Thank you for your feedback ! 🚀", pos: 'bottom-center'});
            // })
            event.preventDefault();
        }
    },
    mounted() {
        axios
            .get(endpoint + "/announces/news")
            .then(response => {
                this.latestNews = response.data
            })

        if (localStorage.getItem("Token")) {
            this.logged = true;
        }
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

.navbar-light .navbar-text a {
    color: rgba(90, 132, 197, 0.9) !important;
}

.dropdown-menu.feedback
{
    width: 250px;
}

</style>
