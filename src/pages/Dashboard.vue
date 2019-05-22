<template>
    <Section class="bg-light semi air pane" mode="xs">
        <div class="row">
            <div class="col-lg-12">
                <v-gravatar :email="this.data.email" default-img="mm" :size="75" class="float-left mr-3 rounded-circle" />
                <h2>Welcome back, Clint Mourlevat</h2>
                <p class="lead">This is your dashboard, to manage all your nodes.</p>
                <!-- <pre>{{ this.data }}</pre> -->
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav border-bottom" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active inherit pl-1" id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inherit" id="allnodes-tab" data-toggle="tab" href="#allnodes" role="tab">All Nodes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inherit" id="settings-tab" data-toggle="tab" href="#settings" role="tab">Settings</a>
                    </li>
                    <li class="nav-item ml-auto d-none d-sm-block d-lg-block">
                        <input type="search" class="form-control form-control-sm" placeholder="Search Keywords..." />
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="dashboard" role="tabpanel">
                        <!-- <div class="row">
                            <div class="col-lg-12 pt-3">
                                <img src="https://cloud-cdn-digitalocean-com.global.ssl.fastly.net/aurora/assets/images/marketplace-hero-aa00844cd5e80f1c27ee739a1f41f9ba.jpg" />
                            </div>
                        </div> -->
                        <!-- <div class="row">
                            <div class="col-lg-6">
                                <div class="card border-0 shadow-sm mt-4">
                                    <div class="card-header bg-white">
                                        <h5 class="card-title font-weight-normal mb-0">Controller</h5>
                                    </div>
                                    <div class="card-body">
                                        ds
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card border-0 shadow-sm mt-4">
                                    <div class="card-header bg-white">
                                        <h5 class="card-title font-weight-normal mb-0">Nodes Statistics</h5>
                                    </div>
                                    <div class="card-body">
                                        ds
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script>
import { endpoint, isLogged } from '../environment.js'
import axios from 'axios'
// import CallToAction from '../components/CallToAction.vue'
import Section from '../components/Section.vue'

export default {
    name: 'Dashboard',
    data () {
      return {
          data: {},
        }
    },
    components: {
        //   Hero,
        // CallToAction,
        Section
    },
    mounted() {
        if(!isLogged())
        {
            this.$router.push("/")
        }
        axios
            .get(endpoint + "/authentication/get")
            .then(response => {
                this.data = response.data
            })
            // .catch(error => {
            //     console.log(error)
            // })
    }
}
</script>

<style scoped>
</style>