<template>
  <div class="border-2 border-gray-200 p-4 pb-8 text-gray-900 w-full flex flex-col">
    <div id="title">
      <h1 class="mt-2 mb-4 mx-4 font-semibold">{{title}}</h1>
    </div>
    <div id="chart" class="w-48 mx-auto flex-grow">
      <svg
        class="circle-container fill-current text-gray-600"
        viewBox="0 0 33.8309886 33.8309886"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="circle-bg"
          stroke="#efefef"
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
        />
        <circle
          class="circle-fg"
          stroke="#00acc1"
          :stroke-dasharray="chartRange"
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
        />
        <text x="17" y="21" class="percentage text-xs font-semibold">{{percentage}}%</text>
      </svg>
    </div>
    <div id="info" class="text-center mt-8 text-gray-500 px-4 lg:px-16">
      <p class="font-semibold">Total sales made today</p>
      <p class="font-bold ml-2 text-2xl text-gray-800 tracking-tight">$178</p>
      <p
        class="mt-3 leading-tight"
      >Traditional heading elements are designed to work best in the meat of your page content.</p>
    </div>
    <div id="footer" class="mt-8 flex justify-around">
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
  name: "CircularChart",
  props: ["value", "title", "info"],
  data() {
    return {
      percentage: this.value,
      chartRange: `${this.value} 100`
    };
  },
  methods: {
    arrow(item) {
      return item.ascending
        ? `/zondicons/arrow-thin-up.svg`
        : `/zondicons/arrow-thin-down.svg`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.percentage {
  fill: #00acc1;
  /* transform: rotate(-90deg); */
  text-anchor: middle;
  font-size: 10px;
}

.circle-bg {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.circle-fg {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  transform: rotate(-90deg);
  transform-origin: center;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
