import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import Element from "element-ui";
import i18n from "./lang";
// import VueAnalytics from "vue-analytics";
import "element-ui/lib/theme-chalk/index.css";
const axios = require("axios");
// import http from "./helper/http";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import animated from "animate.css";
import * as swiperAni from "@/lib/swiper-animate/swiper.animate.min.js";

/** style */
import "./styles/index.scss";
Vue.use(Element, { size: "medium", i18n: (key, value) => i18n.t(key, value) });

Vue.use(VueAwesomeSwiper);
Vue.use(animated);
Vue.prototype.$swiperAnimateCache = swiperAni.swiperAnimateCache;
Vue.prototype.$swiperAnimate = swiperAni.swiperAnimate;
Vue.prototype.$clearSwiperAnimate = swiperAni.clearSwiperAnimate;
Vue.prototype.$axios = axios;

/** Google Analytics 谷歌统计 */
// Vue.use(VueAnalytics, {
//   id: "UA-149504339-1",
//   router
// });

Vue.config.productionTip = false;
// Vue.prototype.$http = http;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
