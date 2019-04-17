<template>
    <div class="container">
        <div class="jumbotron bg-white -mx-5 shadow rounded">
            <div class="container">
                <hooper :autoPlay="true" :playSpeed="5000">
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
                                <Button to="/deploy/stratis" class="btn btn-outline-primary">{{ announcement.actionButton }}</Button>
                            </div>
                        </div>
                    </slide>
                </hooper>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
    name: 'Announcement',
    data () {
        return { announcements: [{},{}] }
    },
    components: {
        Hooper,
        Slide
    },
    mounted() {
        axios
            .get("https://localhost:44396/api/demo/announcements")
            .then(response => {
                this.announcements = response.data
                // hooper.restart()
            })
    }
}
</script>

<style scoped>
</style>
