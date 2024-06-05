<template>
    <main class="main">
        <div class="flex min-h-screen flex-col bg-background">
            <HeaderCommon ref="headerCommon" :data="data" />
            <div class="flex-1 bg-background">
                <router-view class="router-view" v-slot="{Component}">
                    <main class="container">
                        <component ref="routerView" :is="Component" :data="data"/>
                    </main>
                </router-view>
            </div>
            <footer class="py-6 md:px-8 md:py-0">
                <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div class="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        <span class="inline-block">基于 <a href="javascript:void(0);" class="underline underline-offset-4 font-bold decoration-foreground">Vue3 + TypeScript + Vite + Shadcn</a> 开发</span>
                        <span class="ml-0.5">.</span>
                        <span class="inline-block ml-2">Copyright © 2020-2024</span>
                        <span class="ml-0.5">.</span>
                        <span class="inline-block ml-2"><a href="https://www.makeyang.com" target="_blank" class="underline underline-offset-4 font-bold decoration-foreground">MakerYang</a> 构建和设计</span>
                        <span class="ml-0.5">.</span>
                        <span class="inline-block ml-2">All Rights Reserved</span>
                        <span class="ml-0.5">.</span>
                    </div>
                </div>
            </footer>
        </div>
    </main>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick, ref } from "vue";
import { ThemeColors } from "./packages/config";
import { useStore } from "./packages/store";
import { useDark } from "@vueuse/core";
import HeaderCommon from "./pages/common/header.vue";

const $store = useStore();
const data: any = ref({
    theme: {
        colors: ThemeColors,
        dark: useDark()
    },
    store: $store,
});

onBeforeMount(() => {});

onMounted(() => {
    document.documentElement.style.setProperty("--radius", `${$store.radius.value}rem`);
    document.documentElement.classList.add(`theme-${$store.theme.value}`);
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style>
@import url("./assets/css/shiki.css");
@import url("./assets/css/tailwind.css");
@import url("./assets/css/themes.css");
</style>