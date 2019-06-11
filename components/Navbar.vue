<template lang="html">
  <nav>
    <ul>
      <li
        v-for="item in items"
        :key="item.name"
      >
        <a
          :href="item.url"
          target="_blank"
          rel="noreferrer"
        >
          <InlineSvg :src="`icons/${item.name.toLowerCase()}.svg`" /> {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import InlineSvg from './InlineSvg.vue';

export default {
  components: {
    InlineSvg,
  },
  data() {
    return {
      items: [
        {
          name: 'Discord',
          url: 'https://discord.gg/W69mtsX',
        },
        {
          name: 'Patreon',
          url: 'https://www.patreon.com/synteklang',
        },
        {
          name: 'Github',
          url: 'https://github.com/syntek-lang',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'sass-mq';
@import '~/assets/css/_globals.scss';

$mobile: (
  height: 56px,
  padding: 16px,
);

$desktop: (
  height: 64px,
  padding: 20px,
);

ul {
  // Transition background and text
  @include transition(background-color, color);

  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @include mq($until: tablet) {
    height: map-get($mobile, height);
  }

  @include mq($from: tablet) {
    height: map-get($desktop, height);
  }

  li a {
    padding: 0 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: $yellow;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      // Transition svg
      @include transition(fill);

      fill: $yellow;
      margin-right: 10px;

      @include mq($until: tablet) {
        height: map-get($mobile, height);
        padding: map-get($mobile, padding) 0;
      }

      @include mq($from: tablet) {
        height: map-get($desktop, height);
        padding: map-get($desktop, padding) 0;
      }
    }

    &:hover {
      background-color: $yellow;
      color: $black;

      svg {
        fill: $black;
      }
    }
  }
}
</style>
