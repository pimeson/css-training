import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Parade from "./components/Parade.vue";
import Login from "./components/Login.vue";
import Battleship from "./components/Battleship.vue";
import Playground from "./components/Playground.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/parade",
      name: "parade",
      component: Parade
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/Battleship",
      name: "Battleship",
      component: Battleship
    },
    {
      path: "/Playground",
      name: "Playground",
      component: Playground
    }
  ]
});
