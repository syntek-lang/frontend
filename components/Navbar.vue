<template lang="html">
  <div class="navigation">
    <nav>
      <div class="nav-mobile">
        <a
          id="nav-toggle"
          href="#"
          @click="toggleNav"
        >
          <span />
        </a>
      </div>
      <ul
        ref="navList"
        class="nav-list"
      >
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
  </div>
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
  methods: {
    toggleNav(event) {
      event.preventDefault();
      event.currentTarget.classList.toggle('active');
      this.$refs.navList.classList.toggle('hide');
    },
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

nav {
  float: right;
}

.hide {
  display: inline-block !important;
  height: 100%;
}

.navigation {
  background: $black;
  height: map-get($mobile, height);
}

.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: $black;
  height: map-get($mobile, height);
  width: map-get($mobile, height);
}

@include mq($until: tablet, $media-type: screen) {
  .nav-list {
    display: block;
  }
}

@include mq($until: tablet, $media-type: screen) {
  nav {
    width: 100%;
    padding: map-get($mobile, height) 0 15px;
  }

  .nav-mobile {
    display: block;
  }

  .nav-list {
    width: 100%;
    display: none;
  }

  .nav-list li {
    width: 100%;
    float: none;
  }
}

#nav-toggle {
  position: absolute;
  left: 0;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0;

  span,
  span::before,
  span::after {
    @include transition(all);

    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: $yellow;
    position: absolute;
    display: block;
    content: ' ';
  }

  span::before {
    top: -10px;
  }

  span::after {
    bottom: -10px;
  }

  &.active span {
    background-color: transparent;

    &::before,
    &::after {
      top: 0;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}

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

  li {
    float: left;
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
