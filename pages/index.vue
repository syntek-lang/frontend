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

</style>
