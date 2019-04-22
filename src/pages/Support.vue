<template>
    <div>
         <Section>
            <div class="mt-5 text-center">
                <h2>{{ $t('index.faq') }}</h2>
                <p class="mb-4 pb-3">{{ $t("index.faqdescription") }}</p>
            </div>
            <FAQ />
        </Section>
    </div>
</template>

<script>
import Section from '../components/Section.vue'
import FAQ from '../components/FAQ.vue'

export default {
    components: {
        Section,
        FAQ
    }
}
</script>
