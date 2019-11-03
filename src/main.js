import Vue from "vue";
import App from "./App.vue";

import VueSimpleSVG from "vue-simple-svg";
Vue.use(VueSimpleSVG);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
