<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeaderBlock extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private subtitle!: string;
  @Prop(String) private image!: string;
  @Prop(String) private imageAlt!: string;
  private blockElement!: HTMLElement;
  private windowScroll: number = 0;
  private loaded: boolean = false;

  private created() {
    this.windowScroll = window.scrollY;
    window.addEventListener('scroll', this.eventHandler);

    const img = new Image();
    img.src = this.image;

    img.onload = () => {
      this.loaded = true;
      this.blockElement.style.transform = `translate3d(0, ${this.translateAmount}%, 0)`;
      this.windowScroll = window.scrollY;
    };
  }

  private mounted() {
    this.blockElement = this.$refs.block as HTMLElement;
  }

  private destroyed() {
    window.removeEventListener('scroll', this.eventHandler);
  }

  private eventHandler() {
    // RAF helps ensure a higher framerate
    window.requestAnimationFrame(() => {
      this.blockElement.style.transform = `translate3d(0, ${this.translateAmount}%, 0)`;
      this.windowScroll = window.scrollY;
    });
  }

  get translateAmount() {
    let translateAmount = 0;

    // High translate amount on small screens
    if (window.innerWidth < 600) {
      translateAmount = this.windowScroll * 0.1;
    }

    // Low translate amount on larger screens
    translateAmount = this.windowScroll * 0.05;

    // Cap translation betweeen 0% and 40%
    return Math.max(Math.min(translateAmount, 40), 0);
  }
}
</script>

<template>
  <header
    class="header-block"
    ref="block"
  >
    <img
      class="background"
      :class="{
        loaded: loaded,
      }"
      :src="image"
      :alt="imageAlt"
    />
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
  </header>
</template>

<style lang="scss" scoped>
.header-block {
  z-index: -1;
  position: relative;
  width: 100%;
  height: 39.5vw;
  margin-bottom: -10vw;
  padding: 3vw;
  overflow: hidden;
  background-color: $blue;
  color: $white;
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  transform: translate3d(0, 0, 0);

  @include breakpoint('md') {
    position: relative;
    left: -15vw;
    width: 80vw;
    height: 35vw;
    margin-bottom: -5vw;
    text-shadow: none;
  }
}

.background {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  transform-origin: 50% 100%;
  opacity: 0;
  transition: transform 50ms linear,
    opacity 1s ease-in-out;

  &.loaded {
    opacity: 1;
  }
}

.title {
  position: relative;
  margin: 0;
  font-family: Montserrat;
  font-size: 3rem;
  z-index: 2;

  @include breakpoint('md') {
    font-size: 4vw;
  }
}

.subtitle {
  position: relative;
  margin: 0;
  font-family: Merriweather;
  font-size: 1.6rem;
  font-weight: 100;
  font-style: italic;
  text-transform: lowercase;
  z-index: 2;

  @include breakpoint('md') {
    font-size: 2vw;
  }

  &::after {
    content: '';
    display: block;
    width: 3vw;
    height: 0.4vw;
    margin: 2vw 0;
    background-color: $white;
  }
}
</style>
