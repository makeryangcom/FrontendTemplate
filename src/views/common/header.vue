<template>
    <div class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border drag">
        <div class="flex h-14 w-full items-center px-2">
            <div class="mr-4 flex justify-start space-x-1">
                <div class="mr-4 flex items-center">
                    <svg class="h-6 w-6 mr-1" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_102_1338)">
                            <path d="M208 128L128 208" stroke="#41B883" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M192 40L40 192" stroke="#41B883" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_102_1338">
                                <rect width="256" height="256" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="font-bold">DTemplate</span>
                </div>
                <nav class="flex items-center space-x-6 no-drag">
                    <div class="text-xs">导航一</div>
                    <div class="text-xs">导航二</div>
                </nav>
            </div>
            <div class="h-[36px] flex flex-1 items-center justify-end space-x-2">
                <div class="w-auto flex-none h-8 no-drag">
                    <Button variant="outline" class="relative h-8 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none w-auto pr-14" @click="props.data.header.search.status = true">
                        <span class="line-clamp-1 text-xs">{{props.data.tools.language.t("header.search.placeholder")}}</span>
                        <div class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span>⌘</span>
                            <span class="text-sm">K</span>
                        </div>
                    </Button>
                </div>
                <div class="flex items-center no-drag">
                    <HeaderTheme ref="headerTheme" :data="props.data" />
                    <Button class="w-8 h-8" variant="ghost" size="icon" @click="onLanguage">
                        <Languages class="w-4 h-4" />
                    </Button>
                    <Button as="a" href="https://github.com/makeryangcom/DesktopTemplate" target="_blank" class="w-8 h-8" variant="ghost" size="icon">
                        <GithubLogoIcon class="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
    <Dialog v-model:open="props.data.header.search.status">
        <DialogContent class="p-0">
            <DialogHeader class="h-0 hidden">
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
            </DialogHeader>
            <Command>
                <CommandInput :placeholder="props.data.tools.language.t('header.search.placeholder')" />
                <CommandEmpty class="text-muted-foreground text-sm">{{props.data.tools.language.t("common.no_relevant_data_available")}}</CommandEmpty>
                <CommandList @escape-key-down="props.data.header.search.status = false">
                    <CommandGroup heading="Links"></CommandGroup>
                </CommandList>
            </Command>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import { BoxIcon, Cross1Icon, GithubLogoIcon, MinusIcon, RotateCounterClockwiseIcon } from "@radix-icons/vue";
import { Languages } from "lucide-vue-next";
import { nextTick, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandList, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../packages/york";
import HeaderTheme from "./header/theme.vue";

const { locale } = useI18n();
const props: any = defineProps<{
    data: any
}>();


function onLanguage(){
    props.data.tools.language.locale = props.data.tools.language.locale === "en" ? "zh" : "en";
    locale.value = props.data.tools.language.locale;
    props.data.tools.language.api.$Update(props.data.tools.language.locale);
}

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {
        console.log("[template:view:common:header]", props.data);
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style scoped>

</style>
