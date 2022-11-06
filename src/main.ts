import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import directives from "./directives";

const app = createApp(App);
directives(app);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
