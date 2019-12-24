<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderBlock from '@/components/HeaderBlock.vue';
import IntroBlock from '@/components/IntroBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import SiteFooter from '@/components/SiteFooter.vue';

@Component({
  metaInfo: {
    title: 'Interactive Developer',
  },
  components: {
    HeaderBlock,
    ContentBlock,
    IntroBlock,
    SiteFooter,
  },
})
export default class Home extends Vue {
}
</script>

<template>
  <main>
    <HeaderBlock
      title="Brandon Cash"
      subtitle="Interactive Developer"
      image="/assets/brandon-cash.jpg"
      imageAlt="A headshot of Brandon Cash"
    />

    <IntroBlock>
      <p>Hello! I'm Brandon Cash, a seasoned interactive developer with a <router-link to="skills">diverse set of skills</router-link> building modern software, focusing on client-side web development, 3D, &amp; Virtual Reality experiences.</p>
      <p>I have had the pleasure of working with <router-link to="work">many amazing clients</router-link> creating award-winning work.</p>
      <p>I am currently seeking a full-time position as a senior web developer. If you are seeking to augment your team with a skillset like mine, please <router-link to="contact">reach out to me</router-link> and get the ball rolling!</p>
    </IntroBlock>

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
</style>
