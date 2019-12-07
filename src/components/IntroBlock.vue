<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentBlock from '@/components/ContentBlock.vue';

@Component({
  components: {
    ContentBlock,
  },
})
export default class IntroBlock extends Vue {
}
</script>

<template>
  <ContentBlock class="intro-block">
    <slot></slot>
  </ContentBlock>
</template>

<style lang="scss" scoped>
.intro-block {
  z-index: 2;
  padding: 5vw;
  background-color: $white;
  box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.05);

  @include breakpoint('md') {
    width: 60vw;
    margin: 0 2.5vw;
  }
}
</style>
