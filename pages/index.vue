<template lang="html">
  <div>
    <Navbar />

    <main>
      <div class="landing">
        <img
          src="banner.png"
          alt="Syntek banner"
          draggable="false"
        >

        <div class="buttons">
          <button
            type="button"
            name="docs"
            @click="openDocs"
          >
            Docs
          </button>

          <button
            type="button"
            name="tryit"
            @click="tryit"
          >
            Try it
          </button>
        </div>
      </div>

      <Demo />

      <div class="why">
        <div class="features">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="feature"
          >
            <h1>{{ feature.title }}</h1>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Demo from '~/components/Demo.vue';

export default {
  components: {
    Navbar,
    Demo,
  },
  data() {
    return {
      features: [
        {
          title: 'Simplicity',
          description: 'Syntek is extremely easy to use. It keeps features simple and reads like English to make it easy for beginners to get started with programming!',
        },
        {
          title: 'Configurable',
          description: 'Change language, disable features, add linting rules, test code, move to different environments, and more!',
        },
        {
          title: 'Assignments',
          description: 'Make interactive assignments, enforce strict rules by disabling features, and expand to new environments like Arduino and Minecraft!',
        },
      ],
    };
  },
  methods: {
    openDocs() {
      window.open('https://docs.syntek.dev', '_blank');
    },
    tryit() {
      document.getElementsByClassName('demo')[0].scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss">
@import 'sass-mq';
@import '~/assets/css/_globals.scss';

$font-family-h: 'Oswald', sans-serif;
$font-family-p: 'Lato', sans-serif;
$button-font-size: 1.3em;

body {
  background-color: $black;
  font-family: $font-family-h;
  font-weight: 600;
  padding-bottom: 100px;
}

.landing {
  margin-top: 30vh;

  img {
    width: 300px;
    display: block;
    margin: 10px auto;
    user-select: none;
  }

  .buttons {
    display: flex;
    justify-content: center;

    button {
      @include transition(background-color, color);

      font-size: $button-font-size;
      width: 150px;
      height: 50px;
      margin: 0 5px;
      border: $border-yellow;
      outline: none;
      cursor: pointer;
      text-transform: uppercase;

      &[name='docs'] {
        background-color: $yellow;
        color: $black;

        &:hover {
          background-color: $black;
          color: $yellow;
        }
      }

      &[name='tryit'] {
        background-color: $black;
        color: $yellow;

        &:hover {
          background-color: $yellow;
          color: $black;
        }
      }
    }
  }
}

.why {
  color: $yellow;
  max-width: 960px;
  margin: 400px auto;

  .features {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include mq($until: desktop) {
      align-items: center;
    }

    .feature {
      margin: 40px 0;
      max-width: 40%;

      @include mq($until: desktop) {
        max-width: 80%;
      }

      @include mq($from: desktop) {
        // Right align every second element
        &:nth-child(even) {
          margin-left: auto;
        }
      }

      p {
        font-family: $font-family-p;
        font-weight: 400;
        line-height: 1.7;
      }
    }
  }
}

</style>
