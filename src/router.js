import Vue from "vue";
import Router from "vue-router";
import MacBookPro164 from "./components/MacBookPro164.vue";
import MacBookPro166 from "./components/MacBookPro166.vue";
// import MacBookPro165 from "./components/MacBookPro165.vue";
import Home from "./views/Home.vue";
import {
  macBookPro164Data,
  macBookPro166Data,
  macBookPro165Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/bubbles",
      name: "Bubbles",
      component: MacBookPro166,
      props: { ...macBookPro166Data },
    },
    // {
    //   path: "/macbook-pro-16-5",
    //   component: MacBookPro165,
    //   props: { ...macBookPro165Data },
    // },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: MacBookPro164,
      props: { ...macBookPro164Data },
    },
  ],
});
