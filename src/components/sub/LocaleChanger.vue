<template>
    <div class="dropdown-menu shadow border-0" aria-labelledby="lang-dropdown">
        <a v-for="(lang, i) in langs" :key="`Lang${i}`" class="dropdown-item" href="#"><span :class="'flag-icon flag-icon-' + lang.flag"></span> &nbsp;{{ lang.name }}</a>
    </div>
</template>

<script>
import '../../../node_modules/flag-icon-css/css/flag-icon.min.css'

export default {
    name: 'LocaleChanger',
    data() {
        return {
            langs: [{
                    'flag': 'fr',
                    'culture': 'fr',
                    'name': 'French'
                },
                {
                    'flag': 'gb',
                    'culture': 'en',
                    'name': 'English'
                }
            ]
        }
    }
}
</script>