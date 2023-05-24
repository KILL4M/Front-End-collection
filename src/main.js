import Vue from "vue";
import App from "./App.vue";
import iview from "iview"
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;

Vue.use(iview)

new Vue({
  render: h => h(App)
}).$mount("#app");
