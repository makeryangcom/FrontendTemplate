<template>
    <router-view ref="routerView" v-slot="{Component}">
        <component :is="Component" :data="data" />
    </router-view>
    <Toaster ref="toaster"></Toaster>
</template>

<script setup lang="ts">
import {ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick} from "vue";
import {useRoute, useRouter} from "vue-router";
import {Request, useI18n, Format} from "./packages";
import {Toaster, useToast} from "./packages/york";

const i18n = useI18n();
const $route = useRoute();
const $router = useRouter();
const {toast} = useToast();

const data: any = ref({
    route: $route,
    router: $router,
    language: {
        current: (navigator as any).language,
        locale: i18n.locale,
        t: i18n.t,
        f: Format
    },
    request: Request,
    toast: toast
});

onBeforeMount(() => {});

onMounted(() => {
    console.log("[app]", data.value);
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style scoped>
@import url("./assets/css/font.css");
@import url("./assets/css/base.css");
@import url("./assets/css/theme.css");
@import url("./assets/css/animation.css");
@import url("./assets/css/keyframe.css");
</style>
