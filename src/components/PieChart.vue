/* _eslint-disable */
<template>
  <div class="border-2 border-gray-200 p-4 pb-8 text-gray-900 w-full flex flex-col">
    <div id="title">
      <h1 class="mt-2 mb-4 mx-4 font-semibold">{{title}}</h1>
    </div>
    <div id="piechart" class="mt-8 h-64 flex flex-grow">
      <svg
        id="svg"
        class="block mx-auto w-48"
        viewBox="-1 -1 2 2"
        style="transform: rotate(-90deg)"
        @mouseleave="onMouseLeave"
      />
    </div>
    <div
      id="tooltip"
      v-show="isTooltipVisible"
      class="mt-4 ml-4 bg-white px-2 shadow py-0 text-gray-800 text-sm font-semibold"
    >
      <span class="text-blue-500 mr-0 text-lg">&bull;</span>
      {{tooltipText}}
    </div>
    <div id="footer" class="mt-4 flex justify-around">
      <div v-for="(item,i) in info" :key="i" class="text-center">
        <h1 class="text-xs uppercase tracking-wider text-gray-500">{{item.label}}</h1>
        <div class="flex items-center">
          <simple-svg
            :filepath="arrow(item)"
            :class="'w-5 h-5 fill-current text-green-500 align-bottom'"
          />
          <p class="font-bold ml-2 text-xl text-gray-800 tracking-tight">{{item.value}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let cumulativePercent = 0;
export default {
  name: "pie-chart",

  props: ["data", "title"],
  data() {
    return {
      values: [],
      info: {},
      isTooltipVisible: false,
      tooltipText: ""
    };
  },
  methods: {
    arrow(item) {
      return item.ascending
        ? `/zondicons/arrow-thin-up.svg`
        : `/zondicons/arrow-thin-down.svg`;
    },
    onMouseMove(evt) {
      this.isTooltipVisible = true;
      this.tooltipText = evt.target.getAttributeNS(null, "data-value");
      let tooltipElement = document.getElementById("tooltip");
      let mouseX = evt.clientX;
      let mouseY = evt.clientY;
      tooltipElement.style = `display: block; position: absolute; top: ${mouseY}px; left: ${mouseX}px`;
    },
    onMouseLeave() {
      this.isTooltipVisible = false;
    },
    getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);

      return [x, y];
    }
  },
  mounted() {
    let cumulativePercent = 0;
    this.values.forEach(slice => {
      //   debugger;
      // destructuring assignment sets the two variables at once
      const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);
      // each slice starts where the last slice ended, so keep a cumulative percent
      cumulativePercent += slice.value;

      const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);

      // if the slice is more than 50%, take the large arc (the long way around)
      const largeArcFlag = slice.value > 0.5 ? 1 : 0;

      // create an array and join it just for code readability
      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        `L 0 0` // Line
      ].join(" ");

      // create a <path> and append it to the <svg> element
      const pathElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      pathElement.setAttribute("d", pathData);
      pathElement.setAttribute("fill", slice.color);
      pathElement.setAttribute("data-value", slice.value * 100);
      pathElement.addEventListener("mousemove", this.onMouseMove);
      const svgEl = document.querySelector("#piechart svg");
      svgEl.appendChild(pathElement);
    });
  },
  created() {
    // this.values = this.data["values"].map(val => (val * 256) / 100);
    this.values = this.data["values"].map(val => {
      const value = val.value / 100;
      const color = val.color;
      return { value, color };
    });
    // this.values = this.data["values"].map(val => val);
    this.info = this.data["info"];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transition-all {
  transition: all 0.15s ease;
}
</style>
