<template>
    <Section class="bg-light pane" mode="xs">
        <div id="loader" class="loader" style="height: 60vh;" v-if="!this.loaded">
            <half-circle-spinner :animation-duration="1000" :size="50" color="#555555" />
        </div>
        <div class="row" v-if="this.loaded">
            <div class="col-lg-12 text-center">
                <h2>Explore our Blockchain Nodes</h2>
                <p class="mb-4 pb-3">Find here all our brilliant nodes.</p>
            </div>
        </div>
        <div class="row" v-if="this.loaded">
            <div class="col-lg-12">
                <ul class="nav border-bottom" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active inherit" id="allnodes-tab" data-toggle="tab" href="#allnodes" role="tab">All Nodes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inherit" id="fullnodes-tab" data-toggle="tab" href="#fullnodes" role="tab">Full Nodes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inherit" id="masternodes-tab" data-toggle="tab" href="#masternodes" role="tab">Masternodes</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link inherit" id="othernodes-tab" data-toggle="tab" href="#othernodes" role="tab">Other</a>
                    </li> -->
                    <li class="nav-item ml-auto d-none d-sm-block d-lg-block">
                        <input type="search" v-model="query" class="form-control form-control-sm" placeholder="Search Keywords..." />
                    </li>
                </ul>
                <div class="tab-content py-3" id="myTabContent">
                    <div class="tab-pane fade show active" id="allnodes" role="tabpanel">
                        <div class="row">
                            <div v-for="node in allNodes()" :key="node.id" class="col-lg-4 col-sm-6">
                                <div class="card border-0 shadow-sm mb-4">
                                    <div class="card-body">
                                        <router-link :to="'/explore/' + node.id">
                                            <i class="far float-right info mt-1 fa-question-circle"></i>
                                        </router-link>
                                        <h4 class="card-title">
                                            <img class="icon" :src="node.icon" :alt="node.title" />
                                            <router-link :to="'/explore/' + node.id" class="inherit ml-2">{{ node.title }}
                                            </router-link>
                                        </h4>
                                        <p class="card-text">{{ node.description }}</p>
                                        <p class="card-text mt-3"><small class="text-muted">Version {{ node.version }}</small></p>
                                    </div>
                                    <div class="list-group list-group-flush">
                                        <router-link :to="'/deploy/' + node.id" class="list-group-item inherit">Deploy {{ node.title }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="fullnodes" role="tabpanel">
                        <div class="row">
                            <div v-for="node in fullnodes()" :key="node.id" class="col-lg-4 col-sm-6">
                                <div class="card border-0 shadow mb-4">
                                    <div class="card-body">
                                        <router-link :to="'/explore/' + node.id">
                                            <i class="far float-right info mt-1 fa-question-circle"></i>
                                        </router-link>
                                        <h4 class="card-title">
                                            <img class="icon" :src="node.icon" :alt="node.title" />
                                            <router-link :to="'/explore/' + node.id" class="inherit ml-2">{{ node.title }}
                                            </router-link>
                                        </h4>
                                        <p class="card-text">{{ node.description }}</p>
                                        <p class="card-text mt-3"><small class="text-muted">Version {{ node.version }}</small></p>
                                    </div>
                                    <div class="list-group list-group-flush">
                                        <router-link :to="'/deploy/' + node.id" class="list-group-item inherit">Deploy {{ node.title }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="masternodes" role="tabpanel">
                        <div class="row">
                            <div v-for="node in masternodes()" :key="node.id" class="col-lg-4 col-sm-6">
                                <div class="card border-0 shadow mb-4">
                                    <div class="card-body">
                                        <router-link :to="'/explore/' + node.id">
                                            <i class="far float-right info mt-1 fa-question-circle"></i>
                                        </router-link>
                                        <h4 class="card-title">
                                            <img class="icon" :src="node.icon" :alt="node.title" />
                                            <router-link :to="'/explore/' + node.id" class="inherit ml-2">{{ node.title }}
                                            </router-link>
                                        </h4>
                                        <p class="card-text">{{ node.description }}</p>
                                        <p class="card-text mt-3"><small class="text-muted">Version {{ node.version }}</small></p>
                                    </div>
                                    <div class="list-group list-group-flush">
                                        <router-link :to="'/deploy/' + node.id" class="list-group-item inherit">Deploy {{ node.title }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="othernodes" role="tabpanel">
                        <p class="text-muted">Nothing to show.</p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script>
import { endpoint } from '../environment.js'
import { HalfCircleSpinner } from 'epic-spinners'
import axios from 'axios'
import Section from '../components/Section.vue'

export default {
    name: 'Explore',
    components: {
        Section,
        HalfCircleSpinner
    },
    methods: {
        allNodes() {
            if(this.query)
            {
                return this.nodes.filter((item) => { return item.listed == true && item.slug.toLowerCase().includes(this.query.toLowerCase()) })
            }
            return this.nodes.filter(function(item) { return item.listed == true; })
        },
        fullnodes() {
            return this.allNodes().filter(function(item) { return item.type == "fullnode"; })
        },
        masternodes() {
            return this.allNodes().filter(function(item) { return item.type == "masternode"; })
        }
    },
    data() {
        return {
            loaded: false,
            nodes: [],
            query: null
        }
    },
    mounted() {
        axios
            .get(endpoint + "/node-templates")
            .then(response => {
                this.loaded = true
                this.nodes = response.data
            })
    }
}
</script>

<style scoped>
.icon
{
    width: 23px;
    vertical-align: top;
    padding-top: 3px;
}

.info
{
    color: #CCCCCC;
}
</style>