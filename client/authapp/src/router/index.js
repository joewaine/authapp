import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)
Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/home",
//     name: "home",
//     component: Home,
//     meta: {
//       requiresAuth: true
//     }
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: () => import("../views/login.vue")
//   },
//   {
//     path: "/",
//     name: "home",
//     component: () => import("../views/Home.vue")
//   },
//   {
//     path: "/register",
//     name: "register",
//     component: () => import("../views/register.vue")
//   },
//   {
//     path: "/addproduct",
//     name: "addproduct",
//     component: () => import("../views/addproduct.vue")
//   },

// ];

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },
  {
    path: "/addproduct",
    name: "addproduct",
    component: () => import("../views/addproduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
