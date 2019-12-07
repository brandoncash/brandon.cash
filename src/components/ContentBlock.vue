<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentBlock extends Vue {
}
</script>

<template>
  <section class="content-block">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.content-block {
  margin: 5vw;
}

a {
  color: $blue;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: $white;
    background-color: $blue;
    text-decoration: none;
  }
}

h1 {
  margin: 0 0 2vw 0;
  font-size: 3rem;

  @include breakpoint('md') {
    font-size: 3vw;
  }
}

h2 {
  margin: 0 0 2vw 0;
  font-size: 2rem;

  @include breakpoint('md') {
    font-size: 2.4vw;
  }
}

h3 {
  margin: 0 0 2vw 0;
  font-size: 1.6rem;

  @include breakpoint('md') {
    font-size: 1.8vw;
  }
}

h4 {
  margin: 2rem 0 1rem 0;
  font-size: 1.4rem;

  @include breakpoint('md') {
    margin: 2vw 0 1vw 0;
    font-size: 1.4vw;
  }
}

p,
li,
blockquote {
  font-size: 1.6rem;

  @include breakpoint('md') {
    font-size: 1.2vw;
  }
}

blockquote {
  margin: 1vw 2vw;
  padding: 1vw 2vw;
  border-left: 1.2vw solid $gray-light;
  border-right: 1.2vw solid $gray-light;
}
</style>
