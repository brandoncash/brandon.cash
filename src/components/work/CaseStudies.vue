<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import caseStudies from '@/data/case-studies';

@Component
export default class CaseStudies extends Vue {
  private caseStudies: any = caseStudies;
}
</script>

<template>
  <section class="case-studies-grid">
    <router-link
      v-for="caseStudy in caseStudies"
      :key="caseStudy.name"
      class="grid-item"
      :to="`/work/${caseStudy.slug}`"
    >
      <div class="grid-image">
        <img
          :src="`/assets/case-studies/${caseStudy.slug}.jpg`"
          :alt="caseStudy.name"
        />
      </div>

      <div class="exterior">
        <div class="study-info">
          <div class="name">{{ caseStudy.name }}</div>
          <div class="client">{{ caseStudy.client }}</div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.case-studies-grid {
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
    height: 32.3vw;
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

.study-info {
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

  .study-info {
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
