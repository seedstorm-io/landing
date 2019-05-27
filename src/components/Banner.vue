<template>
    <nav id="banner" :class="(isDashboardLayout() ? 'dashboard':'') + ' navbar navbar-expand-lg navbar-light small py-0'">
        <div :class="isDashboardLayout() ? 'container-fluid':'container'">
            <span class="navbar-text inner">
                {{ latestNews.title }}
                <a :href="latestNews.link" target="_blank" class="ml-1 inherit">{{ $t("banner.redmore") }}</a>
            </span>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="login" v-if="!logged" class="nav-link">{{ $t("banner.login") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="create-account" v-if="!logged" class="nav-link">{{ $t("banner.createaccount") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="dashboard" v-if="logged" class="nav-link">{{ $t("banner.welcomeback", ['clint']) }}</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" @click="logout" v-if="logged" class="nav-link">{{ $t("banner.logout") }}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i class="far fa-smile"></i></a>
                        <div class="dropdown-menu shadow border-0 feedback">
                            <form class="px-3 py-1 pb-3" v-on:submit="submitFeedback" action="#">
                                <div class="form-group">
                                    <label>{{ $t('banner.enterfeedback') }}</label>
                                    <textarea class="form-control" v-model="feedback" required rows="5" :placeholder="$t('banner.suggestfeature')"></textarea>
                                </div>
                                <button type="submit" class="btn btn-block btn-xs btn-outline-primary" :disabled="this.afterPostedFeedback">{{ $t('banner.postfeedback') }}</button>
                            </form>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="lang-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span :class="actualFlag"></span>
                        </a>
                        <div class="dropdown-menu shadow border-0" aria-labelledby="lang-dropdown">
                            <a v-on:click="changeCulture(lang)" v-for="(lang, i) in langs" :key="`Lang${i}`" class="dropdown-item" href="#"><span :class="`flag-icon flag-icon-${lang.flag}`"></span> &nbsp;{{ lang.name }}</a>
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
import { endpoint, isLogged } from '../environment.js'
import { cultures } from '../internationalization'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios'
import '../../node_modules/flag-icon-css/css/flag-icon.min.css'

export default {
    name: 'Banner',
    data() {
        return {
            feedback: null,
            latestNews: {},
            logged: false,
            langs: cultures,
            actualFlag: "flag-icon flag-icon-gb",
            afterPostedFeedback: false
        }
    },
    methods: {
        isDashboardLayout() {
        return this.$route.meta.layout == "dashboard";
        },
        changeCulture(culture){
            this.$i18n.locale = culture.culture
            this.actualFlag = 'flag-icon flag-icon-' + culture.flag
        },
        logout()
        {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you really want to log out ?",
                type: 'error',
                showCancelButton: true,
                confirmButtonColor: '#dd3333',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.$router.push("/logout")
                }
            })
        },
        submitFeedback(e) {
            axios
            .post(endpoint + "/feedbacks", { "content": this.feedback })
            .then(response => {
                this.feedback = ""
                this.afterPostedFeedback = true
                this.$snackbar.show({text: "Thank you for your feedback ! 🚀", pos: 'bottom-center'});
            })
            e.preventDefault();
        }
    },
    mounted() {
        this.logged = isLogged();
        axios
            .get(endpoint + "/announces/news")
            .then(response => {
                this.latestNews = response.data
            })
    }
}
</script>

<style scoped>
#banner {
    background-color: #fafafa;
    color: #AAAAAA;
    height: 40px;
}

#banner.dashboard
{
  padding: 15px 50px;
  z-index: 99999;
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
