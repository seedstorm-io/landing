<template>
    <div v-if="this.displayed" id="cookie-consent">
        <h4>🍪 Cookies</h4>
        <p class="small mb-1-">SeedStorm.io use cookies to enhance the user experience and for other features.</p>
        <button v-on:click="acceptCookies()" class="btn btn-outline-light btn-sm">I Accept</button>
        <router-link to="/privacy-policy" class="btn btn-link text-white btn-sm">Read More</router-link>
    </div>
</template>

<script>
export default {
    name: "CookieConsent",
    data() {
        return {
            displayed: false
            }
        },
    mounted()
    {
        if(localStorage.getItem("CookieConsent") == null)
        {
            this.displayed = true;
        }
        
    },
    methods: {
        acceptCookies()
        {
            this.displayed = false;
            localStorage.setItem("CookieConsent", true)
        }
    }
}
</script>

<style scoped>
#cookie-consent
{
    background-color: #2e313a;
    background-color: #272a33;
    max-width: 280px;
    color: #eeeeee;
    margin: 25px;
    padding: 20px 25px;
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>
