import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
// import Blog from "@/views/Blog.vue";
// import Contact from "@/views/ContactUs.vue";
// import posts from "@/components/Blog/posts.vue";
// import sidebar from "@/components/Blog/sidebar.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blogpost",
    component:() => import("@/views/Blog.vue")
    // children: [{
    //   path: ":id",
    //   name: "posts",
    //   component: posts,
    //   props: true
    // },
    // {
    //   path:':id',
    //   name: "posts",
    //   component: sidebar,
    //   props: true
    // }]
  },
  {
    path:'/blog/:id',
    name: "posts",
    component: () => import("@/components/Blog/posts.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
