<template>
  <span ref="zondIconSVG" v-html="svgContent"></span>
</template>

<script>
export default {
  name: "zond-icon",
  props: ["name"],
  data() {
    return { svgContent: "" };
  },
  async mounted() {
    let src = `/zondicons/${this.name}.svg`;
    const res = await fetch(src);
    console.log(res);
    const data = await res.text()
    console.log(data);
    this.svgContent = data

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  width: 100%;
  height: 100%;
}
</style>
