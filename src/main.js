import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

//fontawesome------------------
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
//-----------------------------

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App)
}).$mount("#app");
