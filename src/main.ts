import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./packages/router";
import * as components from "./packages/shadcn";

const app = createApp(App);

app.use(router);

for (const [key, component] of Object.entries(components)) {
    app.component(key, component);
}

app.mount("#app");