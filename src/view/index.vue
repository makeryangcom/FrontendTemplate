<template>
    <div class="w-full h-8 fixed left-0 right-0 top-[calc(50%-16px)] text-center">Hello Vue3 + TypeScript + Vite + Pinia Frontend Template</div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick} from "vue";

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style scoped>

</style>
