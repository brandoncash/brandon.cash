<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentBlock from '@/components/ContentBlock.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import skills from '@/data/skills';

@Component({
  metaInfo: {
    title: 'Skills',
  },
  components: {
    ContentBlock,
    SiteFooter,
  },
})
export default class Work extends Vue {
  private skillGroups: any = skills;
}
</script>

<template>
  <main>
    <ContentBlock>
      <h1>Skills</h1>
      <h2>Tools of the Trade</h2>

      <p>
        I am a multi-disciplinary developer that has run the gamut on developing for the web. Originally focusing on back-end development, over the years I began focusing on front-end skills and eventually introduced 3D and virtual reality. My current focus includes JavaScript, Vue, CSS animation, and Unity.
      </p>
    </ContentBlock>

    <!-- Loop skill groups -->
    <section
      v-for="(skillGroup, skillGroupIndex) in skillGroups"
      :key="skillGroupIndex"
      class="skill-group"
    >
      <ContentBlock class="no-margin">
        <h2>{{ skillGroup.name }}</h2>
        <p>{{ skillGroup.description }}</p>
      </ContentBlock>

      <div class="skill-grid">
        <button
          v-for="(skill, skillIndex) in skillGroup.skills"
          :key="skillIndex"
          class="skill-item"
          :aria-label="`More details about ${skill.name}`"
        >
          <div class="interior">
            <img
              :src="require(`../assets/skills/${skill.logo}.png`)"
              :alt="`The ${skill.name} logo`"
            />
          </div>

          <div class="exterior">
            <img
              :src="require(`../assets/skills/${skill.logo}.png`)"
              :alt="`The ${skill.name} logo`"
            />
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </button>
      </div>
    </section>

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
.no-margin {
  margin: 0;
}

.skill-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 5vw 5vw 5vw;
  opacity: 0.2;
  animation: skill-group-reveal 1s ease-in-out 300ms 1 both;

  @for $i from 1 through 4 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 300ms;
    }
  }

  &:hover,
  &:focus-within {
    z-index: 2;
  }
}

.skill-grid {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-item {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-basis: 50%;
  height: 30vw;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: $white;
  opacity: 1;
  transform: scale(0.9);
  transition: transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;

  @include breakpoint('md') {
    flex-basis: 20%;
    height: 10vw;
  }

  // Dim siblings on focus/hover
  .skill-grid:focus-within &,
  .skill-grid:hover & {
    @include breakpoint('md') {
      z-index: 1;
      opacity: 0.5;
    }
  }

  // Bring this to the top
  .skill-grid &:hover,
  .skill-grid &:focus {
    z-index: 2;
    transform: scale(1.05) translateY(-2vw);
    opacity: 1;

    .exterior {
      opacity: 1;
    }
  }

  img {
    height: 15vw;
    margin: auto;

    @include breakpoint('md') {
      height: 5vw;
    }
  }
}

.skill-item h3 {
  margin: 1rem 0 0 0;
  font-size: 1.8rem;
  font-weight: normal;

  @include breakpoint('md') {
    margin: 2rem 0 0 0;
    font-size: 2rem;
  }
}

.skill-item .interior,
.skill-item .exterior {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  @include breakpoint('md') {
    padding: 1vw;
  }
}

.skill-item .exterior {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50vw;
  height: auto;
  margin: 0 0 0 -25vw;
  padding: 7.5vw 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  background-color: $white;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;

  @include breakpoint('md') {
    top: 0;
    left: 50%;
    width: 20vw;
    margin: 0 0 0 -10vw;
    padding: 2.5vw 2vw;
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
  }
}

.skill-item .exterior p {
  font-size: 1.4rem;
  line-height: 1.4;

  @include breakpoint('md') {
    font-size: 1vw;
  }
}

@keyframes skill-group-reveal {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
