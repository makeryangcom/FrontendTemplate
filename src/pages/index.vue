<template>
    <main class="text-sm">Vue3 + TypeScript + Vite</main>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick, ref } from "vue";

const props: any = defineProps<{
    data: any
}>();

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {

    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>