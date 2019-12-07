<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FloatingSymbols extends Vue {
}
</script>

<template>
  <div class="floating-symbols">
    <div class="plus plus--one">
      <div class="spin">&plus;</div>
    </div>

    <div class="plus plus--two">
      <div class="spin">&plus;</div>
    </div>

    <div class="plus plus--three">
      <div class="spin">&plus;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.plus {
  z-index: -1;
  position: fixed;
  font-size: 10vw;
  font-family: Montserrat;
  font-weight: bold;
  color: $gray-light;
  transition: transform 3s ease-in-out,
    opacity 1.3s ease-in-out;
  opacity: 0.2;

  .spin {
    animation: spin 80s infinite linear;
  }

  .loaded & {
    opacity: 1;
  }
}

.plus--one {
  top: 2vh;
  left: 20vw;
  transform: scale(1.4);

  .loaded & {
    transform: scale(1);
  }
}

.plus--two {
  top: 40vh;
  right: 10vw;
  transform: scale(1.8) rotate(-30deg);

  @include breakpoint('md') {
    right: 5vw;
  }

  .loaded & {
    transform: scale(1) rotate(20deg);
  }
}

.plus--three {
  top: 80vh;
  left: 14vw;
  transform: scale(2) rotate(0deg);

  .loaded & {
    transform: scale(1.2) rotate(70deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.4);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
}
</style>
