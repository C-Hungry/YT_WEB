import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

// 路由跳转置顶
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return {
      x: 0,
      y: 0
    };
  }
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.name === from.name) {
    next(false);
  } else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
