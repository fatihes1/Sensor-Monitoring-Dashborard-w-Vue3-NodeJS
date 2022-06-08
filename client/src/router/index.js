import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/components/WelcomePage.vue";
import HomePage from "@/components/HomePage.vue"
import AllSensors from "@/components/AllSensors.vue"
import SensorDetail from "@/components/SensorDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "welcome",
      path: "/",
      component: WelcomePage,
    },
    {
      name : "home", // -> All main point
      path : "/home",
      component: HomePage
    },
    {
      name : "mainpoint", // --> All sensor from a main point
      path : "/mainpoint/:id",
      component : AllSensors,
    },
    {
      name : "sensor",
      path : "/sensor/:id",
      component : SensorDetail
    }
  ],
});

export default router;
