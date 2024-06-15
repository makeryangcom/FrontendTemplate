<template>
    <div class="flex min-h-screen flex-col bg-background">
        <StartHeader ref="startHeader" :data="props.data" />
        <div class="flex-1 bg-background">
            <StartDemo ref="startDemo" :data="props.data" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick} from "vue";
import StartHeader from "./start/common/header.vue";
import StartDemo from "./start/demo.vue";

const props: any = defineProps<{
    data: any
}>();

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {
        console.log("[template:index]", props);
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>
