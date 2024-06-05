import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../../pages/index.vue";

const routes: any = [
    {
        path: "/",
        name: "Index",
        component: Index
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})