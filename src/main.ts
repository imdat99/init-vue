import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from "pinia";
import { createApp, h, provide } from "vue";
import { VueQueryPlugin } from "vue-query";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import { createHead } from "@vueuse/head";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import App from "./App.vue";
import "./assets/main.scss";
import directives from "./directives";
import router from "./router";
import { URL } from "./utils/constant";

const head = createHead();

const defaultClient = new ApolloClient({
  // link: httpLink,
  uri: URL.GRAPHQL + "/graphql",
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render: () => h(App),
});

directives(app);
app.use(PerfectScrollbar, {
  options: {
    suppressScrollX: true,
  },
});
app.use(createPinia());
app.use(head);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
