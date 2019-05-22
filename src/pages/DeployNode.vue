<template>
    <section class="bg-light centered air pane">
        <div class="container">
            <img :src="this.node.icon" class="mb-4 rounded-circle height-75" />
            <h1 class="native mb-3 font-weight-500">Deploy {{ this.node.title }}</h1>
            <p>{{ this.node.description }}</p>
        </div>
    </section>
</template>

<script>
import { endpoint, isLogged } from '../environment.js'
import axios from 'axios'

export default {
    name: 'DeployNode',
    data() {
        return {
            data: {},
            node: {}
        }
    },
    components: {
    },
    mounted() {
        if(!isLogged())
        {
            this.$router.push("/")
        }
        var router = this.$router;
        axios
            .get(endpoint + "/authentication/get")
            .then(response => {
                this.data = response.data
            })
            
        axios
            .get(endpoint + "/node-templates/" + this.$route.params.id)
            .then(response => {
                this.node = response.data
            })
            .catch(function() {router.push("/error")})
    }
}
</script>

<style scoped>
</style>