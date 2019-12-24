<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeaderBlock extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private subtitle!: string;
  @Prop(String) private image!: string;
  private windowScroll: number = 0;
  private loaded: boolean = false;

  private created() {
    this.windowScroll = window.scrollY;
    window.addEventListener('scroll', this.eventHandler);

    const img = new Image();
    img.src = this.image;

    img.onload = () => {
      this.loaded = true;
    };
  }

  private destroyed() {
    window.removeEventListener('scroll', this.eventHandler);
  }

  private eventHandler() {
    // RAF helps ensure a higher framerate
    window.requestAnimationFrame(() => {
      this.windowScroll = window.scrollY;
    });
  }

  get scaleAmount() {
    // Never scale below 1.0
    if (this.windowScroll < 0) {
      return 1;
    }

    // High scale amount on small screens
    if (window.innerWidth < 600) {
      return 1 + (this.windowScroll * 0.001);
    }

    // Low scale amount on larger screens
    return 1 + (this.windowScroll * 0.0002);
  }
}
</script>

<template>
  <header class="header-block">
    <img
      class="background"
      :class="{
        loaded: loaded,
      }"
      :src="image"
      :style="`transform: scale(${scaleAmount});`"
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
