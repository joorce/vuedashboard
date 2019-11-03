<template>
  <div class="border-2 border-gray-200 p-4 pb-8 text-gray-900 w-full flex flex-col justify-end">
    <div id="title">
      <h1 class="mt-2 mb-4 mx-4 font-semibold">{{title}}</h1>
    </div>
    <div id="barchart" class="_bg-gray-200 mt-16 flex flex-grow">
      <svg id="svg" class="mx-auto w-48 h-56 md:64" overflow="visible" @mouseleave="onMouseLeave">
        <g v-for="(val,i) in values" :key="i">
          <rect
            class="tooltip-trigger fill-current text-blue-500 hover:text-blue-300 transition-color"
            :height="val['height']"
            :data-value="val['value']"
            y="0"
            :x="i*16"
            width="12"
            @mousemove="onMouseMove"
          />
        </g>
      </svg>
    </div>
    <div
      id="tooltip-css"
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
export default {
  name: "bar-chart",

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
    translateChart() {
      let barElement = document.getElementById("barchart");
      let height = barElement.offsetHeight - 4 * 8;
      return `translate(0,${height}) scale(1,-1)`;
      // return `translate(0,256) scale(1,-1)`
    },
    positionBars() {
      const bars = document.querySelectorAll("svg rect");
      bars.forEach(bar => {
        bar.setAttribute("transform", this.translateChart());
      });
    },
    onMouseMove(evt) {
      this.isTooltipVisible = true;
      this.tooltipText = evt.target.getAttributeNS(null, "data-value");
      let tooltipElementCSS = document.getElementById("tooltip-css");

      let mouseX = evt.pageX;
      let mouseY = evt.pageY;
      tooltipElementCSS.style = `display: block; position: absolute; top: ${mouseY}px; left: ${mouseX}px`;
    },
    onMouseLeave() {
      this.isTooltipVisible = false;
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.positionBars();
    });
    this.positionBars();
  },
  created() {
    this.values = this.data["values"].map(val => {
      let calcHeight = (val * 100) / 256;
      return { height: calcHeight.toFixed(2) + "%", value: val };
    });
    this.info = this.data["info"];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transition-all {
  transition: all 0.15s ease;
}
.transition-color {
  transition: color 0.15s ease;
}
</style>
