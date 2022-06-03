import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/components/WelcomePage.vue";
import HomePage from "@/components/HomePage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "welcome",
      path: "/",
      component: WelcomePage,
    },
    {
      name : "home",
      path : "/home",
      component: HomePage
    }
  ],
});

export default router;
