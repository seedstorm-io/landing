<template>
    <div class="container">
        <div class="jumbotron bg-white mx-5 mb-5 shadow rounded">
            <div class="container">
                <div id="loader" class="loader" style="height: 250px;" v-if="!this.loaded">
                    <half-circle-spinner :animation-duration="1000" :size="50" color="#555555" />
                </div>
                <transition name="fade">
                    <hooper :autoPlay="true" :playSpeed="5000" v-if="this.loaded">
                        <slide v-for="announcement in announcements" :key="announcement.id">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="text-center">
                                        <img :src="announcement.image" style="width: 200px;" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <h6 class="accent font-weight-normal">Announcement</h6>
                                    <h3>{{ announcement.title }}</h3>
                                    <p class="mt-3">{{ announcement.description }}</p>
                                    <Button to="/deploy/stratis"
                                        class="btn btn-outline-primary">{{ announcement.actionButton }}</Button>
                                </div>
                            </div>
                        </slide>
                    </hooper>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { endpoint } from '../environment.js'
import axios from "axios"
import { HalfCircleSpinner } from 'epic-spinners'
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
    name: 'Announcement',
    data () {
        return {
            loaded: false,
            announcements: [{},{}]
        }
    },
    components: {
        Hooper,
        Slide,
        HalfCircleSpinner
    },
    mounted() {
        axios
            .get(endpoint + "/announces/announcements")
            .then(response => {
                this.loaded = true;
                this.announcements = response.data
            })
    }
}
</script>

<style scoped>
</style>
