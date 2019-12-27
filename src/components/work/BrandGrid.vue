<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import brands from '@/data/brands';

@Component
export default class BrandGrid extends Vue {
  private brands: any = brands;
}
</script>

<template>
  <section class="brand-grid">
    <div
      v-for="brand in brands"
      :key="brand.name"
      class="grid-item"
    >
      <img
        :src="`assets/brands/${brand.logo}.svg`"
        :alt="brand.name"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.brand-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 5vw;
}

.grid-item {
  display: flex;
  flex-basis: 50%;
  height: 20vw;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  transform: scale(0.9);
  transition: filter 0.25s ease-in-out,
    transform 0.25s ease-in-out;
  filter: grayscale(1);
  will-change: opacity, transform;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  // Stagger the intro animation
  @for $i from 0 to 20 {
    &:nth-child(#{$i}) img {
      animation-delay: 300ms + ($i * 200ms);
    }
  }

  @include breakpoint('md') {
    flex-basis: 33%;
    height: 8vw;
  }
}

.grid-item img {
  width: 65%;
  margin: 0 auto;
  opacity: 0.6;
  animation: brand-reveal 1s ease-in-out 30ms 1 both;
}

@keyframes brand-reveal {
  0% {
    opacity: 0.6;
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
