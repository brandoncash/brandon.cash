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
    title: 'Work – Settle Your Score',
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
export default class SettleYourScore extends Vue {
}
</script>

<template>
  <main>
    <HeaderBlock
      title="Settle Your Score"
      subtitle="Client: Russell Athletic"
      image="/assets/case-studies/settle-your-score/settle-your-score-header.jpg"
      imageAlt="A high school football team lined up"
    />

    <IntroBlock>
      <p>Leading the web development portion of a large advertising campaign for a company as recognizable as Russell Athletic meant crafting a flawless experience.</p>
      <p>Allowing the client to focus on media to showcase their branding, photos, and videos meant creating a powerful integration with a content management system.</p>
    </IntroBlock>

    <ContentBlock>
      <h3>#SettleYourScore</h3>
      <blockquote>
        <p>Skipping the pro endorsement deals, Russell Athletic partnered with six high school teams that lost the state championship by a touchdown or less for a season-long campaign to stare down and overcome that loss. Russell partnered with legendary photographer Robert Clark to create six documentaries and partnered with student photographers to create more than 300 pieces of original content that hit the raw emotion of team sports.</p>
      </blockquote>
      <p>With a brand as well known as Russell Athletic, we knew content had to be king. Tying in with video, social media, and other efforts of a massive advertising campaign, we devised an interactive web experience that showcased photographs and video for the brand and the teams.</p>
      <p>The goal was to convert unwavering team spirit into a rejuvenation of apparel sales. Earning over <strong>240 million media impressions</strong> across several platforms, we ultimately increased year-to-year sales by <strong>180 percent</strong> in the back-to-school period.</p>
    </ContentBlock>

    <VideoBlock url="https://player.vimeo.com/video/230146311" />

    <ContentBlock>
      <h3>Crafting an Interactive Web Experience</h3>
      <p>My role in the advertising campaign was technical lead and a vast majority of front- and back-end development. Working closely with and guiding other teammates, the site was built in a tight deadline while managing a small budget.</p>

      <h4>From front to back</h4>
      <p>We crafted a WordPress-powered site with a completely custom front-end. Utilizing Advanced Custom Fields on the backend, content editors were able to curate a large amount of content ahead of time. Utilizing jQuery on the front-end, a customized masonry-style grid of photos and video worked as a portal into interactive content for each team on the front-end.</p>

      <h4>Device-First Approach</h4>
      <p>Knowing that many young users prefer to browse the web and make purchases with mobile devices and tablets, we built the site with extensive dedication to screens of all sizes. Utilizing an in-house CSS framework and accompanying JavaScript feature detection, we made sure to always provide the best experience for every device.</p>
      <p>Quality assurance meant testing on many real devices, ensuring that the experience was of the highest quality and accessible to all. Whether viewing the site on a phone, tablet, or desktop, the experience with <em>Settle Your Score</em> left users with a desire to back their team and purchase apparel.</p>
    </ContentBlock>

    <BulletPointsBlock
      src="/assets/case-studies/settle-your-score/bullet-points.png"
      alt="Take or Treat Bullet Points"
    >
      <ul>
        <li>
          <div class="content">
            <div class="name">240 million earned media impressions</div>
            <div class="description">Earned media impressions were key. The campaign received double the initial goal.</div>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="name">40% Facebook Fan Growth</div>
            <div class="description">Facebook video engagement rates were two times above industry average.</div>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="name">15 million video views</div>
            <div class="description">Time spent on partner site SB Nation video content also surpassed their editorial content average by 36%.</div>
          </div>
        </li>
        <li>
          <div class="content">
            <div class="name">180% increase in online apparel sales</div>
            <div class="description">During the key back-to-school period, online apparel sales increased 180% year-over-year.</div>
          </div>
        </li>
      </ul>
    </BulletPointsBlock>

    <ContentBlock>
      <p>I had the pleasure of leading a small team of developers to help this vision come to life. Working closely with designers, video producers, copywriters, and quality assurance team members, we were able to achieve the impossible and launch an amazing rebranding.</p>
      <p>Though the interactive web experience was only one part of the advertising campaign and rebranding effort, it was the gateway to the storefront in which all apparel purchases were made.</p>
    </ContentBlock>

    <ImageBlock
      src="/assets/case-studies/settle-your-score/8-seconds.jpg"
      alt="A muscular student wearing a shirt that reads '8 Seconds - #Settle Your Score'"
    />

    <ContentBlock>
      <h3>Post-Launch Reception</h3>
      <p>The team's unique concept and amazing performance did not go unnoticed by the advertising community. The project was nominated for many awards and took home some amazing wins while being praised by news outlets for its authenticity and unique approach.</p>
      <h4>Awards</h4>
      <ul>
        <li>AAF American Advertising Awards Gold</li>
        <li>AAF American Advertising Awards Silver</li>
        <li>Cannes Short List 2016</li>
        <li>Clio Sports Award Gold</li>
        <li>Clio Sports Award Bronze</li>
      </ul>

      <h4>In the News</h4>
      <ul>
        <li>
          <a href="https://www.adweek.com/agencyspy/barkley-russell-athletic-want-to-inspire-you-to-settle-your-score/115530/" target="_blank">
            Barkley and Russell Athletic want you to #settleyourscore &mdash; Ad Week
          </a>
        </li>
        <li>
          <a href="https://usatodayhss.com/2016/russell-athletic-eddie-george-help-state-football-runners-up-settleyourscore" target="_blank">
            Russell Athletic, Eddie George help state football runners-up #SettleYourScore &mdash; USA Today
          </a>
        </li>
        <li>
          <a href="https://www.thedrum.com/news/2016/08/23/russell-athletic-turns-state-championship-anguish-motivation-settle-your-score" target="_blank">
            Settle Your Score &mdash; The Drum
          </a>
        </li>
      </ul>
    </ContentBlock>

    <ImageBlock
      src="/assets/case-studies/settle-your-score/coach-kyle.jpg"
      alt="A close-up photograph of coach Kyle Ralph's eye with the text 'This is Coach Ralph' overlaid"
    />

    <SiteFooter />
  </main>
</template>

<style lang="scss" scoped>
</style>
