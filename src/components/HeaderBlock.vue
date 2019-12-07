<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HeaderBlock extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private subtitle!: string;
  @Prop(String) private image!: string;
}
</script>

<template>
  <header
    class="header-block"
    :style="`background-image: url(${image});`"
  >
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
  </header>
</template>

<style lang="scss" scoped>
.header-block {
  z-index: -1;
  width: 100%;
  height: 39.25vw;
  margin-bottom: -10vw;
  padding: 3vw;
  background-position: 100% 0%;
  background-size: contain;
  background-repeat: no-repeat;
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

.title {
  margin: 0;
  font-family: Montserrat;
  font-size: 3rem;
  z-index: 1;

  @include breakpoint('md') {
    font-size: 4vw;
  }
}

.subtitle {
  margin: 0;
  font-family: Merriweather;
  font-size: 1.6rem;
  font-weight: 100;
  font-style: italic;
  text-transform: lowercase;
  z-index: 1;

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
