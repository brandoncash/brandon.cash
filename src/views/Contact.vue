<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentBlock from '@/components/ContentBlock.vue';
import SiteFooter from '@/components/SiteFooter.vue';

@Component({
  metaInfo: {
    title: 'Get in Touch',
  },
  components: {
    ContentBlock,
    SiteFooter,
  },
})
export default class Contact extends Vue {
  private contactLinks: any = [
    {
      name: 'Email',
      description: 'Get in touch the old fashioned way.',
      icon: 'email',
      link: 'mailto:brandoncash@gmail.com',
    },
    {
      name: 'LinkedIn',
      description: 'Connect with me on LinkedIn.',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/brandon-cash-7b643285/',
    },
    {
      name: 'GitHub',
      description: 'View the source of this site on GitHub.',
      icon: 'github',
      link: 'https://github.com/brandoncash/brandon.cash',
    },
  ];
}
</script>

<template>
  <main>
    <ContentBlock>
      <h1>Contact</h1>
      <h2>Get in Touch</h2>

      <div class="contact-grid">
        <a
          v-for="(contact, contactIndex) in contactLinks"
          :key="contactIndex"
          class="contact-item"
          :href="contact.link"
          target="_blank"
        >
          <div class="interior">
            <img
              :src="`assets/icons/${contact.icon}.svg`"
              :alt="contact.name"
            />
          </div>

          <div class="exterior">
            <img
              :src="`assets/icons/${contact.icon}.svg`"
              :alt="contact.name"
            />
            <h3>{{ contact.name }}</h3>
            <p>{{ contact.description }}</p>
          </div>
        </a>
      </div>
    </ContentBlock>

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
.contact-grid {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-item {
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
  color: $black;
  opacity: 1;
  transform: scale(0.9);
  transition: transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  box-shadow: 0 0.4vw 1vw rgba(0, 0, 0, 0.1);
  -webkit-tap-highlight-color: transparent;

  @include breakpoint('md') {
    flex-basis: 40%;
    height: 15vw;
  }

  &:hover,
  &:focus {
    z-index: 2;
    background-color: $white;
    color: $black;
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
      height: 7vw;
    }
  }
}

.contact-item h3 {
  margin: 1rem 0 0 0;
  font-size: 1.8rem;
  font-weight: normal;

  @include breakpoint('md') {
    margin: 2rem 0 0 0;
    font-size: 2rem;
  }
}

.contact-item .interior,
.contact-item .exterior {
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

.contact-item .exterior {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50vw;
  height: auto;
  margin: 0 0 0 -25vw;
  padding: 7.5vw 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  background-color: $white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;

  @include breakpoint('md') {
    top: 0;
    left: 50%;
    width: 22vw;
    margin: 0 0 0 -11vw;
    padding: 4vw 2vw;
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
  }
}

.contact-item .exterior p {
  font-size: 1.4rem;
  line-height: 1.4;

  @include breakpoint('md') {
    font-size: 1vw;
  }
}
</style>
