<template>
    <div class="bg-white">
        <Hero>
            <div class="container">
                <h1 class="display-4 native font-weight-500">
                    {{ $t("support.title") }}
                </h1>
                <p v-html="$t('index.description', ['<a href=\'https://seedstorm.io\'>SeedStorm.io</a>'])"></p>
                <div class="form-group">
                    <Button to="/create-account" class="btn button btn-shadow btn-primary mr-2">
                        <i class="fas fa-life-ring"></i>&nbsp;
                        {{ $t('support.getsupport') }}
                    </Button>
                    <Button to="/explore" class="btn btn-shadow btn-dark ml-2">
                        <i class="fas fa-book"></i>&nbsp;
                        {{ $t('support.documentation') }}
                    </Button>
                </div>
            </div>
        </Hero>
        <Section class="">
            <div class="mt-5 text-center">
                <h2>{{ $t('index.faq') }}</h2>
                <p class="mb-4 pb-3">{{ $t("index.faqdescription") }}</p>
            </div>
            <FAQ />
        </Section>
    </div>
</template>

<script>
import { endpoint, isLogged } from '../environment.js'
import Section from '../components/Section.vue'
import Hero from '../components/Hero.vue'
import FAQ from '../components/FAQ.vue'
import CallToAction from '../components/CallToAction.vue'
import Button from '../components/sub/Button.vue'

export default {
    components: {
        Section,
        Hero,
        FAQ,
        CallToAction,
        Button
    },
}
</script>
