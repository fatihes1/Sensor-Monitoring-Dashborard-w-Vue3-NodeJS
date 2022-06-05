import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/components/WelcomePage.vue";
import HomePage from "@/components/HomePage.vue"
import AllSensors from "@/components/AllSensors.vue"

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
    },
    {
      name : "mainpoint",
      path : "/mainpoint/:id",
      component : AllSensors,
      props: true
    }
  ],
});

export default router;
