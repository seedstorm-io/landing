<template>
    <section class="bg-light position-relative">
        <form class="mx-auto text-center inner" @submit="login">
            <h1 class="font-weight-normal">Login to SeedStorm</h1>
            <p class="">Join the most powerful serverless platform in the world and start deploying within seconds.</p>
            <div class="form-group">
                <label>Email</label>
                <input type="email" required class="form-control shadow-sm" placeholder="Enter your Email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" required class="form-control shadow-sm" placeholder="Enter your Password" />
            </div>
            <Button to="/explore" class="btn btn-block btn-shadow btn-dark mt-4">
                <i class="fas fa-check"></i> Login to my account
            </Button>
            <p class="small text-muted" style="margin-top: 20vh">If you don't have an account, you can make one <router-link to="register">here</router-link>.</p>
        </form>
        <!-- <cookie-law law theme="dark-lime">
            <div slot="message">
                Here is my message for more info <router-link to="privacy-policy">Click here</router-link>
            </div>
        </cookie-law> -->
    </section>
</template>

<script>
import Hero from '../components/Hero.vue'
import CookieLaw from 'vue-cookie-law'

export default {
  name: 'Login',
  components: {
      Hero,
      CookieLaw
  },
  methods: {
      login(event) {
          this.$snackbar.show({text: "You are sucessfully logged in. 🚀", pos: 'bottom-center'});
          event.preventDefault()
        //   router.push('home')
      }
  }
}
</script>

<style scoped>
section
{
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