<template>
  <div class="border-2 border-gray-200 p-4 pb-8 text-gray-900 w-full">
    <div id="info" class="flex justify-between ">
      <div id="icon" class="rounded-full h-12 w-12 flex items-center justify-center" :style="{'background-color': color}">
        <simple-svg
          :filepath="`/zondicons/${this.icon}.svg`"
          :class="'block w-6 h-6 fill-current text-white'"
        />
      </div>
      <div class="text-right">
        <h1 class="font-bold text-3xl text-gray-900 tracking-tight">{{currentGoal}}</h1>
        <p class="text-gray-500 uppercase text-xs tracking-wider">{{subtext}}</p>
      </div>
    </div>
    <div id="goal" class="relative pt-6">
      <div id="goalinfo" class="flex justify-between">
        <h1 class="uppercase text-sm tracking-wide font-semibold">Goal</h1>
        <span class="uppercase text-sm tracking-wide font-semibold">{{percentage}}%</span>
      </div>
      <div id="goalbar" class="mt-2">
        <div class="absolute bg-gray-300 p-1 w-full rounded-lg"></div>
        <div
          class="absolute p-1 rounded-lg"
          :style="{'width' : currentPercentage + '%', 'background-color' : color}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "simple-card",

  props: ["currentGoal", "goal", "subtext", "icon", "color"],
  data() {
    return {
      iconContent: "",
      percentage: 0,
      currentPercentage: 0
    };
  },
  created() {
    this.percentage = ((this.currentGoal * 100) / this.goal).toFixed(1);

    let intval = setInterval(() => {
      if (this.currentPercentage < this.percentage) this.currentPercentage += 1;
      else clearInterval(intval);
    }, 10);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
