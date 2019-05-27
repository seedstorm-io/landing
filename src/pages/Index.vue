<template>
    <div>
        <Hero>
            <div class="container">
                <h1 v-if="this.displayTyper" class="display-4 native font-weight-500">
                    <vue-typer :text='$t("index.title")' :type-delay='120' :repeat='0' caret-animation='smooth'></vue-typer>
                </h1>
                <h1 v-if="!this.displayTyper" class="display-4 native font-weight-500">
                    {{ $t("index.title") }}
                </h1>
                <p v-html="$t('index.description', ['<a href=\'https://seedstorm.io\'>SeedStorm.io</a>'])"></p>
                <div class="form-group">
                    <Button v-if="this.logged" to="/dashboard" class="btn button btn-shadow btn-primary mr-2">{{ $t('index.gotodashboard') }}</Button>
                    <Button v-if="!this.logged" to="/create-account" class="btn button btn-shadow btn-primary mr-2">{{ $t('index.gettingstarted') }}</Button>
                    <Button to="/explore" class="btn btn-shadow btn-dark ml-2">
                        <i class="fas fa-cubes"></i> {{ $t('index.exploreblockchain') }}
                    </Button>
                </div>
            </div>
        </Hero>
        <Announcement />
        <Section style="background-color: #fafafa;">
            <div style="padding: 200px 0;">
                ds
            </div>
        </Section>
        <Section>
            <div class="mt-5 text-center">
                <h2>{{ $t('index.faq') }}</h2>
                <p class="mb-4 pb-3">{{ $t("index.faqdescription") }}</p>
            </div>
            <FAQ />
        </Section>
        <CallToAction content="Don't loose your money, stake your coins on SeedStorm.io" button="Get Started" to="create-account" />
        <CookieConsent />
    </div>
</template>

<script>
import { endpoint, isLogged } from '../environment.js'

import CallToAction from '../components/CallToAction'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Announcement from '../components/Announcement'
import Button from '../components/sub/Button'
import CookieConsent from '../components/sub/CookieConsent'

export default {
    name: 'Index',
    components: {
        Hero,
        Announcement,
        Button,
        CallToAction,
        Section,
        FAQ,
        CookieConsent
    },
    data() {
        return {
            logged: false,
            displayTyper: true
        }
    },
    mounted() {
        this.logged = isLogged()
        if (localStorage.getItem("FirstRun") === null) {
            localStorage.setItem("FirstRun", "true")
        }
        else
        {
            this.displayTyper = false;
        }
    }
}
</script>

<style>
</style>