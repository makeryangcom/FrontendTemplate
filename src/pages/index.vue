<template>
    <div class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 pb-8">
        <div class="text-center text-1xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Vue3 + TypeScript + Vite + Shadcn</div>
        <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
            <a href="javascript:void(0);" class="rounded-md" :class="cn(buttonVariants(), 'rounded-[6px]')">Get Started</a>
            <a href="https://github.com/makeryangcom/FrontendTemplate" target="_blank" class="rounded-md" :class="cn(buttonVariants({ variant: 'outline' }), 'rounded-[6px]')"><GithubLogoIcon class="mr-2 h-4 w-4" />GitHub</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick } from "vue";
import { cn } from "../packages/shadcn/utils";
import { buttonVariants } from "../packages/shadcn/button";
import { GithubLogoIcon } from "@radix-icons/vue";

const props: any = defineProps<{
    data: any
}>();

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>