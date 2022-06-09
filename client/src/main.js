import { createApp } from "vue";
import { createPinia } from "pinia";
import './index.css'

import App from "./App.vue";
import router from "./router";

import { appAxios } from "./utils/appAxios";

import io from "socket.io-client";
const socket = io("http://localhost:8080");

const app = createApp(App);


app.use(createPinia());
app.use(router);

app.config.globalProperties.$socket = socket;
app.config.globalProperties.$appAxios = appAxios;

app.mount("#app");
