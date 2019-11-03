/* _eslint-disable */
<template>
  <div class="border-2 border-gray-200 p-4 pb-8 text-gray-900 w-full">
    <svg class="border" viewBox="0 0 420 220">
      <polyline
        fill="#0074d9"
        stroke="#0074d9"
        stroke-width="3"
        points="
        0,220
        50,50
        85,100
        120,180
        200,20
        240,80
        300,180
        420,60
        420,220
       "
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "line-chart",

  props: ["data"],
  data() {
    return {
      values: []
    };
  },
  created() {
    this.values = this.data["values"];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
