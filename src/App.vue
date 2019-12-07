<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationMenu from '@/components/NavigationMenu.vue';
import FloatingSymbols from '@/components/FloatingSymbols.vue';

@Component({
  metaInfo: {
    titleTemplate: 'Brandon Cash — %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'I\'m Brandon Cash, a seasoned interactive developer with a diverse set of skills building modern software, focusing on client-side web development, 3D, & Virtual Reality experiences.' },
      { name: 'theme-color', content: '#3c30ff' },
    ],
  },
  components: {
    NavigationMenu,
    FloatingSymbols,
  },
})
export default class App extends Vue {
  private loaded: boolean = false;

  private mounted() {
    setTimeout(() => {
      (this as any).loaded = true;
    }, 100);
  }
}
</script>

<template>
  <div id="app"
    :class="{ loaded: loaded }">
    <NavigationMenu></NavigationMenu>

    <section class="router-container">
      <transition name="router">
        <router-view />
      </transition>
    </section>

    <FloatingSymbols></FloatingSymbols>
  </div>
</template>

<style lang="scss" scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.router-container {
  transition: transform 2s ease-in-out,
    opacity 2s ease-in-out;
  transition-delay: 0.5s;
  opacity: 0;
  transform: scale(1.02);

  .loaded & {
    opacity: 1;
    transform: scale(1);
  }

  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 5vw;
    transition: transform 0.8s ease-in-out,
      opacity 0.25s ease-in-out;
    z-index: 5;

    @include breakpoint('md') {
      padding-left: 25vw;
      padding-right: 10vw;
    }
  }
}

.router-enter-active,
.router-leave-active {
  transform: translateX(0) scale(1);
}
.router-enter {
  transform: translateX(0) scale(1.02);
  opacity: 0;
  z-index: 1;
}
.router-leave-to {
  transform: translateX(-20vw) scale(0.8);
  opacity: 0;
  z-index: 5;
}
</style>
