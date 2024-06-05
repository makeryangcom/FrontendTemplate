<template>
    <main class="main">
        <router-view class="router-view" v-slot="{Component}">
            <component ref="routerView" :is="Component" :data="data"/>
        </router-view>
    </main>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick, ref } from "vue";

const data: any = ref({});

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {

    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style>
@import url("./assets/css/shiki.css");
@import url("./assets/css/tailwind.css");
@import url("./assets/css/themes.css");
</style>