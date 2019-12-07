<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavigationHandle extends Vue {
}
</script>

<template>
  <button
    @click="$emit('click')"
    class="navigation-handle"
    aria-label="Open Navigation"
  >
    <span class="hamburger"></span>
    <span class="hamburger"></span>
    <span class="hamburger"></span>
  </button>
</template>

<style scoped lang="scss">
// Mobile navigation open/close handle
.navigation-handle {
  z-index: 2;
  position: absolute;
  top: 5vw;
  right: 5vw;
  width: 15vw;
  height: 15vw;
  margin: 0;
  padding: 2.5vw;
  border-width: 0;
  font-size: 2rem;
  background-color: $blue;
  color: $white;
  overflow: hidden;

  @include breakpoint('sm') {
    width: 8vw;
    height: 8vw;
    padding: 1vw;
  }

  @include breakpoint('md') {
    display: none;
  }
}

// Hamburger toppings
.hamburger {
  z-index: 1;
  position: relative;
  display: block;
  width: 10vw;
  height: 1.5vw;
  margin: 1vw 0;
  border-radius: 1vw;
  background: $white;
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-in-out,
    opacity 0.25s ease-in-out;

  @include breakpoint('sm') {
    width: 6vw;
    height: 1vw;
    margin: 0.5vw 0;
  }

  .is-open & {
    &:nth-child(1) {
      transform: translateY(2.5vw) rotate(45deg);

      @include breakpoint('sm') {
        transform: translateY(1.5vw) rotate(45deg);
      }
    }
    &:nth-child(2) {
      opacity: 0;
      transform: scaleX(0.2);
    }
    &:nth-child(3) {
      transform: translateY(-2.5vw) rotate(-45deg);

      @include breakpoint('sm') {
        transform: translateY(-1.5vw) rotate(-45deg);
      }
    }
  }
}
</style>
