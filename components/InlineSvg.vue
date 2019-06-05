<template lang="html">
  <div />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    // Fetch svg
    const { data } = await this.$axios.get(this.src);
    const result = new DOMParser().parseFromString(data, 'text/xml');
    const svg = result.getElementsByTagName('svg')[0];

    // Copy over attributes
    for (const attribute of this.$el.attributes) {
      svg.setAttribute(attribute.nodeName, attribute.nodeValue);
    }

    // Inject svg
    this.$el.parentNode.replaceChild(svg, this.$el);
  },
};
</script>
