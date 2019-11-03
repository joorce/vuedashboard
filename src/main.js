import Vue from "vue";
import App from "./App.vue";

import VueSimpleSVG from "vue-simple-svg";
Vue.use(VueSimpleSVG);

Vue.config.productionTip = false;

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("titlecase", function(value) {
  if (!value) return "";
  value = value
    .toString()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return value.join(" ");
});

new Vue({
  render: h => h(App)
}).$mount("#app");
