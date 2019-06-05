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

      <no-ssr>
        <div class="demo">
          <CodeBlock
            class="editor"

            :code="SnakeSnippet"
            :mode="'syntek'"
          />

          <div class="canvas">
            Canvas
          </div>
        </div>
      </no-ssr>
    </main>
  </div>
</template>

<script>
import SnakeSnippet from '~/assets/snippets/snake.txt';
import Navbar from '~/components/Navbar.vue';

let CodeBlock;
if (process.browser) {
  // eslint-disable-next-line global-require
  CodeBlock = require('@syntek/vue-syntek-editor').CodeBlock;
}

export default {
  components: {
    CodeBlock,
    Navbar,
  },
  data() {
    return {
      SnakeSnippet,
    };
  },
  methods: {
    openDocs() {
      window.open('https://github.com/syntek-lang/syntek/tree/master/syntax', '_blank');
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

body {
  background-color: $black;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
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
      font-size: 1.3em;
      width: 150px;
      height: 50px;
      margin: 0 5px;

      border: $border-yellow;
      outline: none;
      cursor: pointer;
      text-transform: uppercase;

      @include transition(background-color, color);

      &[name="docs"] {
        background-color: $yellow;
        color: $black;

        &:hover {
          background-color: $black;
          color: $yellow;
        }
      }

      &[name="tryit"] {
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

.demo {
  margin-top: 40vh;
  border: $border-yellow;
  height: 800px;

  display: grid;

  // On mobile display editor and canvas underneath eachother
  @include mq($until: tablet) {
    grid-template-rows: 1fr 1fr;
    margin-right: 5px;
    margin-left: 5px;
  }

  // On tablet and desktop display them side by side
  @include mq($from: tablet) {
    grid-template-columns: 1fr 1fr;
    margin-right: 75px;
    margin-left: 75px;

    // Make margin at the sides slightly larger on desktop
    @include mq($from: desktop) {
      margin-right: 100px;
      margin-left: 100px;
    }
  }

  .editor {
    font-size: 1.1em;
    font-weight: normal;
    overflow-x: auto;
  }

  .canvas {
    background-color: $gray;
    color: $yellow;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  // TODO: Remove this when the page continues further down
  margin-bottom: 100px;
}
</style>
