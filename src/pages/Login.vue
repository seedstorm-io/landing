<template>
    <section class="bg-light position-relative">
        <form class="mx-auto text-center inner" @submit.prevent="login">
            <h1 class="font-weight-normal">Login to SeedStorm</h1>
            <p class="">Join the most powerful serverless platform in the world and start deploying within seconds.</p>
            <div class="form-group">
                <label>Email</label>
                <input type="email" required v-model="email" class="form-control shadow-sm" placeholder="Enter your Email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" required v-model="password" class="form-control shadow-sm" placeholder="Enter your Password" />
            </div>
            <Button to="/explore" class="btn btn-block btn-shadow btn-dark mt-4">
                <i class="fas fa-check"></i> Login to my account
            </Button>
            <p class="small text-muted">If you don't have an account, you can make one <router-link to="register">here</router-link>.</p>
        </form>
        <!-- <cookie-law law theme="dark-lime">
            <div slot="message">
                Here is my message for more info <router-link to="privacy-policy">Click here</router-link>
            </div>
        </cookie-law> -->
    </section>
</template>

<script>
import { endpoint } from '../environment.js'
import axios from 'axios'
import { setTimeout } from 'timers';
// import Hero from '../components/Hero.vue'
// import CookieLaw from 'vue-cookie-law'

export default {
  name: 'Login',
//   props: {
//       email: String,
//       password: String
//   }
  data () {
      return {
          email: "",
          password: ""
        }
    },
  components: {
    //   Hero,
    //   CookieLaw
  },
  methods: {
      login(event) {
          axios
          .post(endpoint + "/authentication/authenticate", { email: this.email, password: this.password })
          .then(response => {
              console.log("Token: " + response.data.token)
              localStorage.setItem("Token", response.data.token)
              this.$snackbar.show({text: "You are sucessfully logged in. 🚀", pos: 'bottom-left'})
            })
            .catch(error => {
                this.$snackbar.show({text: "Unable to sign into your account.", pos: 'bottom-left'})
                console.log(error)
                localStorage.removeItem("Token")
            })
            setTimeout(() => {
                this.$router.push("/dashboard")
                location.reload()
            }, 1500)
            event.preventDefault()
      }
  },
  mounted()
  {
      if (localStorage.getItem("Token")) {
          this.$router.push("/dashboard")
      }
  }
}
</script>

<style scoped>
section
{
    border-top: 1px solid #eeeeee;
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

.small.text-muted
{
    margin-top: 20vh
}
</style>