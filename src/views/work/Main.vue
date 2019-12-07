<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentBlock from '@/components/ContentBlock.vue';
import BrandGrid from '@/components/work/BrandGrid.vue';
import CaseStudies from '@/components/work/CaseStudies.vue';
import SiteFooter from '@/components/SiteFooter.vue';

@Component({
  metaInfo: {
    title: 'Work',
  },
  components: {
    ContentBlock,
    BrandGrid,
    CaseStudies,
    SiteFooter,
  },
})
export default class Work extends Vue {
}
</script>

<template>
  <main>
    <ContentBlock>
      <h1>Work</h1>
      <h2>World-Class Clients</h2>

      <p>
        Throughout my years of experience, I have had the pleasure of working with many amazing clients.
        Below are a few notable brand names I have worked with.
      </p>
    </ContentBlock>

    <BrandGrid />

    <ContentBlock>
      <h2>Case Studies</h2>

      <p>Below are a few amazing clients I have had the honor of working with.</p>
    </ContentBlock>

    <CaseStudies />

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
</style>
