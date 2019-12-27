<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FloatingSymbols extends Vue {
  private offsetX: number = 0.5;
  private offsetY: number = 0.5;
  private lastCallTime: number = 0;

  private mounted() {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      // Throttle calls since this doesn't need to update often
      const currentTime = Date.now();
      if (this.lastCallTime - currentTime > 100) {
        return;
      }

      this.lastCallTime = currentTime;
      this.offsetX = (e.clientX / window.innerWidth) * 2;
      this.offsetY = (e.clientY / window.innerHeight) * 2;
    });
  }

  get getTransform() {
    return `translateX(${this.offsetX}vw) translateY(${this.offsetY}vw)`;
  }
}
</script>

<template>
  <div class="floating-symbols">
    <div
      class="transform-container"
      :style="`transform: ${getTransform};`"
    >
      <div class="symbol">
        <div class="spin">
          <img src="assets/icons/plus.svg" alt="A plus symbol" />
        </div>
      </div>

      <div class="symbol">
        <div class="spin">
          <img src="assets/icons/line.svg" alt="A line symbol" />
        </div>
      </div>

      <div class="symbol">
        <div class="spin">
          <img src="assets/icons/line.svg" alt="A line symbol" />
        </div>
      </div>

      <div class="symbol">
        <div class="spin">
          <img src="assets/icons/plus.svg" alt="A plus symbol" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.floating-symbols {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.transform-container {
  transition: transform 0.5s linear;
}

.symbol {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 5vw;
  transition: transform 10s linear,
    opacity 2s ease-in-out;
  opacity: 0.2;

  .spin {
    animation: spin 80s infinite linear;
  }

  .loaded & {
    opacity: 0.5;
  }

  &:nth-child(1) {
    top: 2vh;
    left: 20vw;
    transform: scale(1.4);

    .loaded & {
      transform: scale(1);
    }
  }

  &:nth-child(2) {
    top: 40vh;
    right: 10vw;
    transform: scale(1.8) rotate(-30deg);

    @include breakpoint('md') {
      right: 5vw;
    }

    .loaded & {
      transform: scale(1.5) rotate(20deg);
    }
  }

  &:nth-child(3) {
    top: 80vh;
    left: 4vw;
    transform: scale(2) rotate(0deg);

    .loaded & {
      transform: scale(1.2) rotate(70deg);
    }
  }

  &:nth-child(4) {
    top: 80vh;
    right: 30vw;
    transform: scale(1) rotate(0deg);

    @include breakpoint('md') {
      top: 50vh;
      right: 50vw;
    }

    .loaded & {
      transform: scale(0.7) rotate(70deg);
    }
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
