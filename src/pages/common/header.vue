<template>
    <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border" data="">
        <div class="container flex h-14 items-center">
            <div class="mr-4 md:mr-1 hidden md:flex">
                <a href="/" class="mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2">
                    <span class="h-6 w-6 circle logo mr-2 lg:mr-0">
                        <Avatar class="h-6 w-6">
                            <AvatarImage class="h-6 w-6" src="/images/logo.png" alt="" />
                        </Avatar>
                    </span>
                    <span class="font-bold text-base">MakerYang</span>
                </a>
            </div>
            <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div class="w-full flex-1 md:w-auto md:flex-none">
                    <div class="w-full flex-1 md:w-auto md:flex-none">
                        <Button variant="outline" class="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                            <span class="hidden lg:inline-flex">Search documentation...</span>
                            <span class="inline-flex lg:hidden">Search...</span>
                            <SearchIcon class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                <span class="text-xs">⌘</span>
                                <span class="text-ms">K</span>
                            </SearchIcon>
                        </Button>
                    </div>
                </div>
                <nav class="flex items-center">
                    <ThemeHeader ref="themeHeader" :data="props.data" />
                    <Button as="a" class="w-9 h-9" href="https://github.com/makeryangcom/FrontendTemplate" target="_blank" :variant="'ghost'" :size="'icon'">
                        <component :is="GithubLogoIcon" class="w-5 h-5" />
                    </Button>
                    <Button as="a" href="" class="relative h-8 text-xs ml-2">
                        <span>注册/登录</span>
                    </Button>
                </nav>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick } from "vue";
import ThemeHeader from "./header/theme.vue";
import { Button } from "../../packages/shadcn/button";
import { Avatar, AvatarImage } from "../../packages/shadcn/avatar";
import { SearchIcon } from "../../packages/shadcn/search";
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