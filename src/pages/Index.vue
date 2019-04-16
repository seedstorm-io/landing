<template>
    <div>
        <Hero>
            <div class="container">
                <h1 class="display-4 native font-weight-500">Blockchain Hosting Platform</h1>
                <p><a href="#">Now</a> makes serverless application deployment easy.<br />Don’t spend time configuring the cloud. <strong>Just push your code</strong>.</p>
                <div class="form-group">
                    <Button to="/" class="btn button btn-shadow btn-primary mr-2">Getting Started</Button>
                    <Button to="/" class="btn btn-shadow btn-dark ml-2"><i class="fab fa-github"></i> Begin with Github</Button>
                </div>
            </div>
        </Hero>
        <Announcement>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="text-center">
                            <img src="https://steemitimages.com/DQmXEjToKV2AYR4sbfn4AfcT5YrkH9DQB26dwzPVpGqAM7E/Purple_ldsp.png"
                                style="width: 200px;" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <h6 class="accent font-weight-normal">Announcement</h6>
                        <h3>See the new PIVX Node</h3>
                        <p class="mt-3">Docker Store and Docker Cloud are now part of Docker Hub, providing a single experience for finding, storing and sharing
                        container images.</p>
                        <Button to="/" class="btn btn-outline-primary">Deploy a Pivx Master Node</Button>
                    </div>
                </div>
            </div>
        </Announcement>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Announcement from '../components/Announcement.vue'

export default {
  name: 'Index',
  components: {
      Hero,
      Announcement
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>