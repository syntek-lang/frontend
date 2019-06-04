<template lang="html">
  <div class="container">
    <img
      src="banner.png"
      alt="Syntek banner"
      draggable="false"
    >

    <div class="buttons">
      <button
        type="button"
        name="docs"
        onclick="window.open('https://github.com/syntek-lang/syntek/tree/master/syntax', '_blank')"
      >
        Docs
      </button>

      <button
        type="button"
        name="tryit"
      >
        Try it
      </button>
    </div>
  </div>
</template>

<style lang="scss">
$black: #212121;
$gray: #323232;
$yellow: #FFD273;

body {
  background-color: $black;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
}

.container {
  margin-top: 30vh;
}

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

    border: 1px solid $yellow;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;

    transition: background-color 200ms ease, color 200ms ease;

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
</style>
