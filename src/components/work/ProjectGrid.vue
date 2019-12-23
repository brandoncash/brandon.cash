<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ProjectGrid extends Vue {
  @Prop(Array) private sourceData!: any[];
  @Prop(String) private imageDirectory!: string;

  private projectLink(project: any) {
    if (project.link) {
      return {
        is: 'a',
        href: project.link,
        target: '_blank',
      };
    } else {
      return {
        is: 'router-link',
        to: `/work/${project.slug}`,
      };
    }
  }
}
</script>

<template>
  <section class="project-grid">
    <component
      v-for="project in sourceData"
      :key="project.name"
      v-bind="projectLink(project)"
      v-bind:is="projectLink(project).is"
      class="grid-item"
    >
      <div class="grid-image">
        <img
          :src="`${imageDirectory}/${project.slug}.jpg`"
          :alt="project.name"
        />
      </div>

      <div class="exterior">
        <div class="project-info">
          <div class="name">{{ project.name }}</div>
          <div class="client">{{ project.client }}</div>
        </div>
      </div>
    </component>
  </section>
</template>

<style lang="scss" scoped>
.project-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 5vw;
}

.grid-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  border: 0;
  background-color: transparent;
  text-decoration: none;
  color: $black;
  transition: transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  transform: scale(1);

  @include breakpoint('sm') {
    width: 44%;
    margin-bottom: 0;
  }

  @include breakpoint('md') {
    box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.2);
  }
}

.grid-image {
  position: relative;
  width: 100%;
  height: 107vw;
  overflow: hidden;

  @include breakpoint('sm') {
    height: 47vw;
  }

  @include breakpoint('md') {
    height: 32.2vw;
  }

  img {
    width: 100%;
    margin: 0 auto;
    transition: transform 0.5s ease-in-out;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($blue, 0.3);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
}

.exterior {
  width: 100%;
  padding: 1rem;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;

  @include breakpoint('md') {
    position: absolute;
    top: 0;
    height: 100%;
    color: $white;
    opacity: 0;
    background-image: linear-gradient(0deg,
      rgba($blue, 0.9) 10%,
      rgba($blue, 0));
    box-shadow: 0 1vw 4vw rgba(0, 0, 0, 0.4),
      0 0.5vw 2vw rgba(0, 0, 0, 0.2);
  }
}

.project-info {
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;

  @include breakpoint('md') {
    position: absolute;
    bottom: 0;
    padding: 5vw 2vw 2vw 2vw;
    transform: translateY(3vw);
  }
}

.grid-item:hover,
.grid-item:focus {
  transform: scale(1.05);

  .grid-image {
    img {
      transform: scale(1.05);
    }

    &::after {
      opacity: 1;
    }
  }

  .exterior {
    @include breakpoint('md') {
      opacity: 1;
    }
  }

  .project-info {
    @include breakpoint('md') {
      transform: translateY(0vw);
    }
  }
}

.grid-item:active {
  transform: scale(1.1);
  opacity: 0.8;
}

.name {
  margin-bottom: 0rem;
  font-size: 2rem;
  font-weight: bold;

  @include breakpoint('md') {
    margin-bottom: 0.5vw;
    font-size: 2.4vw;
  }
}

.client {
  font-size: 1.6rem;

  @include breakpoint('md') {
    font-size: 1.8vw;
  }
}
</style>
