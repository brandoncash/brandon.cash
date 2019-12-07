<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueFriendlyIframe from 'vue-friendly-iframe';

@Component({
  components: {
    VueFriendlyIframe,
  },
})
export default class VideoBlock extends Vue {
  @Prop(String) private url!: string;
  private loaded: boolean = false;
  private intersected: boolean = false;
  private observer!: IntersectionObserver;

  private documentLoaded() {
    this.loaded = true;
  }

  private mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const block = entries[0];

      if (block.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
      }
    });

    this.observer.observe(this.$el);
  }

  destroyed() {
    this.observer.disconnect();
  }
}
</script>

<template>
  <section
    class="video-block"
    :class="{
      intersected: intersected,
    }"
  >
    <VueFriendlyIframe
      @document-load="documentLoaded"
      :src="url"
      frameborder="0"
      allowfullscreen
      allow="autoplay"
      class="video-iframe"
      :class="{
        loaded: loaded,
      }"
    ></VueFriendlyIframe>
  </section>
</template>

<style lang="scss" scoped>
.video-block {
  width: 80vw;
  height: 47vw;
  margin: 0 5vw;
  background-color: #fff;
  box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.05);
  opacity: 0.5;
  transition: opacity 1s ease-in-out;
  transition-delay: 0.25s;

  @include breakpoint('md') {
    width: 60vw;
    height: 34vw;
    margin: 0 2.5vw;
  }

  &.intersected {
    opacity: 1;
  }
}

.vue-friendly-iframe {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.loaded {
    opacity: 1;
  }

  &::v-deep iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
