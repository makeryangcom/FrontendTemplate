<template>
    <router-view ref="routerView" v-slot="{Component}">
        <component :is="Component" :data="data" />
    </router-view>
    <Toaster ref="toaster"></Toaster>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";
import { useLanguagePackage } from "./packages";
import { Toaster, useToast } from "./packages/york";
import { useBaseStore, useRequestStore, useThemeStore } from "./stores";

const base = useBaseStore();
const language = useLanguagePackage();
const request = useRequestStore();
const theme = useThemeStore();
const {toast} = useToast();

const data: any = ref({
    base: {
        route: base.$useRoute,
        router: base.$useRouter,
        api: base,
    },
    tools: {
        language: {
            current: (navigator as any).language,
            locale: language.$I18n.useI18n().locale,
            t: language.$I18n.useI18n().t,
            f: language.$Format,
            api: language
        },
        request: request.$Request,
        toast: toast
    },
    theme: {
        api: theme,
    },
    header: {
        search: {
            status: false
        }
    },
});

onBeforeMount(() => {});

onMounted(() => {
    document.documentElement.style.setProperty("--radius", `${data.value.theme.api.radius}rem`);
    document.documentElement.classList.add(`theme-${data.value.theme.api.theme}`);
    nextTick(() => {
        console.log("product:" + data.value.base.api.$GetProduct(), "version:" + data.value.base.api.$GetVersion(), "platform:" + data.value.base.api.$GetPlatform(), "language:" + data.value.tools.language.current);
        console.log("author:" + data.value.base.api.$GetAuthor());
        console.log("[template:app]", data.value);
        if(data.value.tools.language.locale === "null"){
            if(data.value.tools.language.current === "zh-CN"){
                data.value.tools.language.locale = "zh";
            }else{
                data.value.tools.language.locale = "en";
            }
        }
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style>
@import url("./assets/css/font.css");
@import url("./assets/css/base.css");
@import url("./assets/css/theme.css");
@import url("./assets/css/animation.css");
@import url("./assets/css/keyframe.css");
</style>
