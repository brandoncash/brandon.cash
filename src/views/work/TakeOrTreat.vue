<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderBlock from '@/components/HeaderBlock.vue';
import IntroBlock from '@/components/IntroBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import VideoBlock from '@/components/VideoBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import BulletPointsBlock from '@/components/BulletPointsBlock.vue';
import SiteFooter from '@/components/SiteFooter.vue';

@Component({
  metaInfo: {
    title: 'Work – Take or Treat',
  },
  components: {
    HeaderBlock,
    IntroBlock,
    ContentBlock,
    VideoBlock,
    ImageBlock,
    BulletPointsBlock,
    SiteFooter,
  },
})
export default class TakeOrTreat extends Vue {
}
</script>

<template>
  <main>
    <HeaderBlock
      title="Take or Treat"
      subtitle="Client: Hershey"
      image="/assets/case-studies/take-or-treat/take-or-treat-header.jpg"
    />

    <IntroBlock>
      <p>Catching the attention of the millennial market sometimes means crafting a bizarre experience.</p>
      <p>But turning a users' mobile device into a makeshift door for Halloween? That was truly extraordinary.</p>
    </IntroBlock>

    <ContentBlock>
      <h3>The Gist</h3>
      <blockquote>
        <p>With Halloween just around the corner, we wanted to get Take 5 on the millennial list of "must-have" halloween candy. In order to reach our target audience, we used the power of nostalgia along with the magic of technology to turn every phone into a front door.</p>
        <p>Just flip, knock, and open. The surprise? A free pack of snack-sized Take 5 Bars delivered to your (actual) doorstep in time for your Halloween party. This was the idea behind <strong>Take or Treat</strong> and it was a smashing success.</p>
      </blockquote>
      <p>Following a rebranding of Take 5 to catch the eye of a younger market, Hershey needed a way to make it stand out from the crowd come Halloween. What could be better than a uniquely bizarre interactive experience that requires a mobile phone and puts candy in your hands?</p>
    </ContentBlock>
    
    <VideoBlock url="https://player.vimeo.com/video/198381762?byline=0&amp;portrait=0" />

    <ContentBlock>
      <h3>Technical Leadership</h3>
      <p>My role in <strong>Take or Treat</strong> was technical lead for the team as well as sole development. Aiding the team during the ideation process, we took the initial creative concept &mdash; knocking on doors for Halloween &mdash; through the possibilities of targeting thousands of users across hundreds of devices.</p>

      <h4>Really&mdash;hundreds of different devices</h4>
      <p>Creating a custom front-end with an in-house CSS framework allowed us to target a multitude of screen sizes and differing dimensions while still staying true to the designers' intentions. The door always fits your device and the video always shows properly from behind the door, but the door frame itself will position itself to fit in the available space.</p>

      <h4>How does it work?</h4>
      <p>Eventually landing on using the accelerometer API available in web browsers, we were able to turn the experience from mere tapping into a more physical experience that emulated opening a door.</p>
      <p>A small server-side API was created to receive form information and analytics, keep track of winners, and decide whether a user would receive a winning video or have to knock again. In a bit of subtle trickery to keep users knocking, we always forced a second try before polling the server the first time. This meant you always got to see a fun trick video before you got your treat.</p>
    </ContentBlock>

    <BulletPointsBlock
      src="/assets/case-studies/take-or-treat/bullet-points.png"
      alt="Take or Treat Bullet Points"
    >
      <ul>
        <li>
          <div class="content">
            <div class="name">No downloading necessary.</div>
            <div class="description">We didn't want anyone to download an app, so we targeted mobile browsers.</div>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="name">We had to restock&mdash;the first day.</div>
            <div class="description">Over 6,200 people received a prize. Many more were too late!</div>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="name">Quirky fun.</div>
            <div class="description">Funny Halloween inspired videos made this a viral hit.</div>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="name">A physical experience.</div>
            <div class="description">The only way to use the application was by physically turning your mobile phone.</div>
          </div>
        </li>
      </ul>
    </BulletPointsBlock>

    <ContentBlock>
      <h3>Technical Hurdles</h3>
      <h4>The latest iPhone or an Android from 2010?</h4>
      <p>We targeted thousands of people with hundreds of different devices that each have different performance capabilities. Not wanting to leave anyone out, we had to devise a way to play high quality video and interact with an accelerometer all within a web browser.</p>
      <p>Playing a video on all mobile devices turned out to be a difficult problem: many older devices don't have the power to play a full-resolution HTML5 video. To solve any performance issues, we detected the capabilities of the device and switched to a faster canvas rendering solution on older devices. Later generation phones would play a smoother full-resolution native video.</p>
      <p>Most devices also require user permission before auto-playing a video. To get the users' permission to play the video, we silently hooked into a button tap on an intro screen.</p>

      <h4>Mobile phones only</h4>
      <p>Typically we want to ensure that an experience is available on as many devices as possible, but that wasn't the case with <em>Take or Treat</em>&mdash;we wanted mobile phones only.</p>
      <p>Using device feature detection and carefully crafted CSS media queries, we ensured that only mobile phones were capable of viewing the experience. We tested with many real devices to ensure that phones of all sizes were allowed but tablets and desktops of similar dimensions were not.</p>
    </ContentBlock>

    <ImageBlock
      src="/assets/case-studies/take-or-treat/device-hints.jpg"
      alt="Hints telling folks to use their mobile phone rather than a computer or tablet"
    />

    <ContentBlock>
      <h3>Social Media Attack</h3>
      <p>The team took to social media to alert the masses to free treats. Immediately we were overwhelmed with how many people were knocking and we quickly ran out of the originally planned 3,105 prizes on the first day.</p>
      <p>But not only did we sell out in a day&mdash;when we resupplied and doubled the amount of prizes, we ran out again in a matter of hours. That was over <strong>6,200 Take 5 bars</strong> in the hands of customers, which we considered a smashing success.</p>
    </ContentBlock>

    <ImageBlock
      src="/assets/case-studies/take-or-treat/social.jpg"
      alt="Take or Treat on Social Media"
    />

    <ContentBlock>
      <h3>Hey, Mikey, I think he likes it!</h3>

      <h4>Awards</h4>
      <ul>
        <li>AAF American Advertising Awards Gold</li>
        <li>Social Media Club of KC AMPS Gold</li>
      </ul>

      <h4>In the News</h4>
      <ul>
        <li>
          <a href="https://lovelymobile.news/barkley-brings-trick-or-treating-to-your-mobile-for-hersheys-take5/" target="_blank">
            Barkley Brings Trick-or-Treating to Your Mobile for Hershey’s TAKE5
          </a>
        </li>
        <li>
          <a href="https://lbbonline.com/news/barkley-proves-youre-never-too-old-for-trick-or-treating/" target="_blank">
            Barkley Proves You're Never Too Old for Trick-or-Treating
          </a>
        </li>
      </ul>
    </ContentBlock>

    <ImageBlock
      src="/assets/case-studies/take-or-treat/workflow.jpg"
      alt="Take or Treat Workflow"
    />

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
</style>
