<template>
    <Section class="bg-light pane" mode="xs">
        <Loader v-if="!this.loaded" />
        <div class="row" v-if="this.loaded">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-12">
                        <h6 class="text-muted"><router-link to="/explore" class="inherit">Explore Nodes</router-link> &rsaquo; {{ this.node.title }}</h6>
                        <br>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7">
                        <img :src="this.node.icon" class="float-left mr-3 height-75" />
                        <h2>{{ this.node.title }}</h2>
                        <p class="lead">{{ this.node.description }} <span class="badge badge-outline text-muted ml-2">Version {{ this.node.version }}</span></p>
                    </div>
                    <div class="col-lg-5 text-right pt-3">
                        <Button :to="'/deploy/' + this.node.id" class="btn button btn-shadow btn-primary mr-2"><i class="fas fa-cloud-upload-alt"></i> {{ $t('explore.deploy', [this.node.title]) }}</Button>
                        <Button to="/deploy/bitcoin" class="btn button btn-shadow btn-dark mr-2"><i class="fas fa-share-alt"></i> &nbsp;Share Node</Button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8">
                        <!--<h4 class="mt-5">What is Stratis ?</h4>
                        <p>Stratis is a blockchain development platform created to provide solutions to businesses wishing to make use of blockchain technology but may be lacking the technological know-how or sufficient capital.</p>
                        <p>The platform allows users to create and deploy blockchain-based applications using a simple programming language that is familiar with many developers; C+ and Microsoft ’s.Net framework.</p>
                        <p>Stratis aims to simplify the process of blockchain adoption for companies and make it cheaper by allowing the companies to deploy their blockchain applications on the Stratis blockchain using the Stratis infrastructure.</p>
                        <h4 class="mt-5">Node Requirement</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h4 class="mt-5">StormCTL Commands</h4>-->
                        <div class="markdown">
                            <vue-markdown v-if="this.node.markdownDescription !== null" :source="this.node.markdownDescription"></vue-markdown>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h4 class="mt-5 mb-4">Maintainer Details</h4>
                        <p><strong>Company: </strong>Stratis Platform Ltd.</p>
                        <p><strong>Website: </strong><a href="">https://stratisplatform.com</a></p>
                        <p><strong>Contact Email: </strong><a href="">contact@stratisplatform.com</a></p>
                        <h4 class="mt-5 mb-4">Related Links</h4>
                        <p><a href="">How To Set Up a Node.js Application for Production on Ubuntu 18.04</a></p>
                        <p><a href="">Stratis Platform Official Website</a></p>
                        <p><a href="">Github Repository</a></p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script>
import { endpoint } from '../environment.js'
import axios from 'axios'

import Section from '../components/Section.vue'
import Button from '../components/sub/Button.vue'
import Loader from '../components/Loader.vue'

import VueMarkdown from 'vue-markdown'

export default {
    name: 'ExploreNode',
    components: {
        Section,
        Button,
        VueMarkdown,
        Loader
    },
    data() {
        return {
            loaded: false,
            node: {},
        }
    },
    mounted() {
        var router = this.$router;
        axios
            .get(endpoint + "/node-templates/" + this.$route.params.id)
            .then(response => {
                this.loaded = true
                this.node = response.data
            })
            .catch(error => this.$snackbar.show({ text: "An error occurred, unable to load the page.", pos: 'bottom-center', actionTextColor: '#f66496', duration: 0 }))
    }
}
</script>

<style scoped>
</style>