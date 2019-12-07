<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BulletPointsBlock extends Vue {
  @Prop(String) private src!: string;
  @Prop(String) private alt!: string;
  private loaded: boolean = false;

  private created() {
    const img = new Image();
    img.src = this.src;

    img.onload = () => {
      this.loaded = true;
    };
  }
}
</script>

<template>
  <section class="bullet-points-block">
    <div class="bullet-descriptions">
      <slot></slot>
    </div>

    <div class="bullet-image">
      <img
        :src="src"
        :alt="alt"
        :class="{
          loaded: loaded,
        }"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bullet-points-block {
  display: flex;
  flex-direction: column-reverse;
  width: 80vw;
  margin: 0 5vw;

  @include breakpoint('md') {
    flex-direction: row;
    width: 60vw;
    height: 34vw;
    margin: 0 2.5vw;
  }
}

.bullet-descriptions {
  display: flex;
  width: 100%;

  @include breakpoint('md') {
    width: 50%;
    height: 100%;
  }
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3vw 2vw;
  padding: 0;
  list-style-type: lower-alpha;
}

li {
  display: flex;
  margin: 1rem 0;
  padding: 0;
  counter-increment: list;

  @include breakpoint('md') {
    margin: 0.5vw 0;
  }
}

li::before {
  content: counter(list);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  font-size: 1.2rem;
  background-color: $gray-light;
  color: $black;

  @include breakpoint('md') {
    width: 2vw;
    height: 2vw;
    margin-right: 1vw;
    font-size: 1.2vw;
  }
}

li .content {
  display: flex;
  flex-direction: column;
  width: calc(100% - 3rem);

  @include breakpoint('md') {
    width: calc(100% - 3vw);
  }
}

li .name {
  margin-bottom: 1rem;
  font-size: 1.6rem;

  @include breakpoint('md') {
    margin-bottom: 0.5vw;
    font-size: 1.4vw;
  }
}

li .description {
  font-size: 1.2rem;

  @include breakpoint('md') {
    font-size: 1vw;
  }
}

.bullet-image {
  width: 100%;
  height: 90vw;

  @include breakpoint('md') {
    width: 50%;
    height: 100%;
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
