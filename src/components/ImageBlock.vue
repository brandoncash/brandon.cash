<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ImageBlock extends Vue {
  @Prop(String) private src!: string;
  @Prop(String) private alt!: string;
  private loaded: boolean = false;
  private intersected: boolean = false;
  private observer!: IntersectionObserver;

  private created() {
    const img = new Image();
    img.src = this.src;

    img.onload = () => {
      this.loaded = true;
    };
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
    class="image-block"
    :class="{
      intersected: intersected,
    }"
  >
    <img
      :src="src"
      :alt="alt"
      :class="{
        loaded: loaded,
      }"
    />
  </section>
</template>

<style lang="scss" scoped>
.image-block {
  width: 80vw;
  height: 45vw;
  margin: 0 5vw;
  background-color: #fff;
  box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.05);
  opacity: 0.2;
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

img {
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.loaded {
    opacity: 1;
  }
}
</style>
