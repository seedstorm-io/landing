<template>
    <section class="bg-light position-relative">
        <form class="mx-auto text-center inner" @submit.prevent="register">
            <h1 class="font-weight-normal">Create an Account</h1>
            <p class="">Make a SeedStorm.io account and pay as you go.</p>
            <div class="form-group">
                <label>Email</label>
                <input type="email" required v-model="email" class="form-control shadow-sm" placeholder="Enter your Email" />
            </div>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" required v-model="fullname" class="form-control shadow-sm" placeholder="Enter your Full Name" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <div class="form-row">
                    <div class="col">
                        <input type="password" required v-model="password" class="form-control" placeholder="Enter Password">
                    </div>
                    <div class="col">
                        <input type="password" required v-model="password2" class="form-control" placeholder="Retype Password">
                    </div>
                </div>
            </div>
            <Button to="/explore" class="btn btn-block btn-shadow btn-dark mt-4">
                <i class="fas fa-check"></i> Create my Account
            </Button>
            <p class="small text-muted">If you already have an account, you can login <router-link to="login">here</router-link>.</p>
        </form>
    </section>
</template>

<script>
import { endpoint } from '../environment.js'
import axios from 'axios'

export default {
  name: 'Register',
  data () {
      return {
          fullname: "",
          email: "",
          password: "",
          password2: ""
        }
    },
  components: {
  },
  methods: {
      register(event) {
          if(this.password != this.password2)
          {
              this.$snackbar.show({text: "The passwords are not the same.", pos: 'bottom-left'})
              return;
          }
          axios
          .post(endpoint + "/authentication/register", { email: this.email, password: this.password })
          .then(response => {
            //   console.log("Token: " + response.data.token)
            //   localStorage.setItem("Token", response.data.token)
              this.$snackbar.show({text: "You are sucessfully registred. 🚀", pos: 'bottom-left'})
            })
            .catch(error => {
              this.$snackbar.show({text: "Unable to create your account.", pos: 'bottom-left'})
                // localStorage.removeItem("Token")
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
    padding: 100px 0 100px;
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
    margin-top: 15vh
}
</style>