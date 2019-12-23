<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentBlock from '@/components/ContentBlock.vue';
import BrandGrid from '@/components/work/BrandGrid.vue';
import ProjectGrid from '@/components/work/ProjectGrid.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import caseStudies from '@/data/case-studies';
import openSource from '@/data/open-source';

@Component({
  metaInfo: {
    title: 'Work',
  },
  components: {
    ContentBlock,
    BrandGrid,
    ProjectGrid,
    SiteFooter,
  },
})
export default class Work extends Vue {
  private caseStudyProjects = caseStudies;
  private openSourceProjects = openSource;
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

    <ProjectGrid
      :sourceData="caseStudyProjects"
      imageDirectory="/assets/case-studies"
    />

    <ContentBlock>
      <h2>Open Source</h2>

      <p>I enjoy sharing my learning experiences on <a href="https://codepen.io/brandoncash" target="_blank">CodePen</a> and showcasing open source projects on <a href="https://github.com/brandoncash" target="_blank">GitHub</a>.</p>
    </ContentBlock>

    <ProjectGrid
      :sourceData="openSourceProjects"
      imageDirectory="/assets/open-source"
    />

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
</style>
