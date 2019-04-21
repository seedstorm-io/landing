<template>
    <div class="dropdown-menu shadow border-0" aria-labelledby="lang-dropdown">
        <a v-on:click="changeCulture(lang.culture)" v-for="(lang, i) in langs" :key="`Lang${i}`" class="dropdown-item" href="#"><span :class="`flag-icon flag-icon-${lang.flag}`"></span> &nbsp;{{ lang.name }}</a>
    </div>
</template>

<script>
import '../../../node_modules/flag-icon-css/css/flag-icon.min.css'
import { cultures } from '../../internationalization'

export default {
    name: 'LocaleChanger',
    methods: {
        changeCulture(culture){
            this.$i18n.locale = culture
        }
    },
    data() {
        return {
            langs: cultures
        }
    }
}
</script>