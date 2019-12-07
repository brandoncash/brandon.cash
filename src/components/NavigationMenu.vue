<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationHandle from '@/components/NavigationHandle.vue';

@Component({
  components: {
    NavigationHandle,
  },
})
export default class NavigationMenu extends Vue {
  private isNavOpen: boolean = false;
  private links: any = [
    { to: '/', label: 'About me' },
    { to: '/skills', label: 'Skills' },
    { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Let\'s chat' },
  ];

  /**
   * Check if a parent path is active
   */
  private subIsActive(path: string) {
    if (path === '/') {
      return;
    }

    return this.$route.path.indexOf(path) === 0;
  }

  private closeNav(): void {
    this.isNavOpen = false;
  }

  private toggleNavOpen(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
</script>

<template>
  <nav class="navigation-container"
    :class="{
      [this.$route.name]: true,
      'is-open': isNavOpen,
    }"
  >
    <NavigationHandle @click="toggleNavOpen"></NavigationHandle>

    <ul class="navigation-menu">
      <li
        v-for="link of links"
        :key="link.to"
      >
        <router-link
          :to="link.to"
          @click.native="closeNav"
          class="link--main"
          :class="{'is-active': subIsActive(link.to)}"
        >
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation-container {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: background-color 0.25s ease-in-out;
  overflow: hidden;

  &.is-open {
    background-color: rgba(255, 255, 255, 0.9);
    height: 100vh;

    @include breakpoint('md') {
      background-color: transparent;
    }
  }

  @include breakpoint('md') {
    width: 25vw;
    height: 100vh;
  }
}

.navigation-menu {
  position: absolute;
  top: 20vw;
  left: 5vw;
  width: 90vw;
  height: 90vw;
  margin: 0;
  padding: 5vw;
  list-style-type: none;
  background-color: $gray-light;
  clip-path: circle(0% at 100% 0%);
  animation: nav-hide-small 0.25s ease-in-out 0s 1 forwards;

  .is-open & {
    animation: nav-reveal-small 0.25s ease-in-out 0s 1 both;
  }

  @include breakpoint('sm') {
    top: 13vw;
  }

  @include breakpoint('md') {
    top: 20vw;
    width: 20vw;
    height: auto;
    padding: 1vw 0;
    clip-path: circle(0% at 0% 50%);
    animation: nav-reveal 1.5s ease-in-out 1s 1 both;
  }
}

li {
  margin: 0;
  padding: 0.5rem;
  text-transform: lowercase;
  font-size: 2.5rem;
  font-family: Merriweather;
  
  @include breakpoint('md') {
    padding: 0.5vw 1vw;
    font-size: 1.4vw;
  }
}

.link--main {
  display: block;
  margin: 0 1vw;
  padding: 0.2vw 1vw;
  color: $blue;
  text-decoration: none;
  transition: transform 0.5s ease-in-out;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: $blue;
    background-color: $white;
  }

  &.is-active {
    background-color: $blue;
    transform: translateX(1vw);
    text-decoration: none;
    color: $white;
    cursor: default;
  }
}

// On the Home screen, the menu should be attention grabbing
.navigation-container.home {
  .navigation-menu {
    background-color: $blue;

    @include breakpoint('md') {
      animation-delay: 2.5s;
    }
  }

  .link--main {
    color: $white;

    &:hover,
    &:focus {
      color: $blue;
    }

    &.is-active {
      background-color: $white;
      color: $blue;
    }
  }
}

// Default large screen menu reveal animation
@keyframes nav-reveal {
  0% {
    clip-path: circle(0% at 0% 50%);
  }
  100% {
    clip-path: circle(150% at 0% 50%);
  }
}

// Small screen menu hide/reveal animations
@keyframes nav-hide-small {
  0% {
    clip-path: circle(150% at 100% 0%);
  }
  100% {
    clip-path: circle(0% at 100% 0%);
  }
}

@keyframes nav-reveal-small {
  0% {
    clip-path: circle(0% at 100% 0%);
  }
  100% {
    clip-path: circle(150% at 100% 0%);
  }
}
</style>
