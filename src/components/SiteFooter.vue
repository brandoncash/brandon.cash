<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class SiteFooter extends Vue {
}
</script>

<template>
  <footer class="site-footer">
      <p>
        Site and content &copy; 2019 Brandon Cash.
        Trademarks, logos, icons, and works belong to their respective owners.
      </p>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  margin: 5rem 5vw;
  font-size: 1.6rem;

  @include breakpoint('md') {
    margin: 10vw 0vw 5vw 5vw;
    font-size: 1.2vw;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2rem;
    margin-bottom: 5vw;
    background-color: $gray-light;
  }
}

p {
  margin: 0 2rem;

  @include breakpoint('md') {
    margin: 0 2vw;
  }
}
</style>
