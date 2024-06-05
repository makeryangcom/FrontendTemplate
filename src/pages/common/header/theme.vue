<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button class="w-9 h-9" :variant="'ghost'" :size="'icon'">
                <Paintbrush class="w-4 h-4" />
            </Button>
        </PopoverTrigger>
        <PopoverContent :side-offset="8" align="end" class="w-96">
            <div class="p-4">
                <div class="grid space-y-1">
                    <h1 class="text-md text-foreground font-semibold">定制</h1>
                    <p class="text-xs text-muted-foreground">选择你喜欢的样式和颜色</p>
                </div>
                <div class="space-y-1.5 pt-6">
                    <Label for="color" class="text-xs"> 颜色 </Label>
                    <div class="grid grid-cols-3 gap-2 py-1.5">
                        <Button v-for="(color, index) in props.data.theme.colors" :key="index" variant="outline" class="h-8 justify-start px-3" :class="color === props.data.store.theme ? 'border-foreground border-2' : ''" @click="props.data.store.setTheme(color)">
                            <span class="h-5 w-5 rounded-full flex items-center justify-center" :style="{ backgroundColor: colors[color][7].rgb }">
                                <CheckIcon v-if="color === props.data.store.theme" class="h-3 w-3 text-white"/>
                            </span>
                            <span class="ml-2 text-xs capitalize">{{color}}</span>
                        </Button>
                    </div>
                </div>
                <div class="space-y-1.5 pt-6">
                    <Label for="radius" class="text-xs"> 半径 </Label>
                    <div class="grid grid-cols-5 gap-2 py-1.5">
                        <Button v-for="(r, index) in props.data.store.RADII" :key="index" variant="outline" class="h-8 justify-center px-3" :class="r === props.data.store.radius ? 'border-foreground border-2' : ''" @click="props.data.store.setRadius(r)">
                            <span class="text-xs">{{ r }}</span>
                        </Button>
                    </div>
                </div>
                <div class="space-y-1.5 pt-6">
                    <Label for="theme" class="text-xs"> 样式 </Label>
                    <div class="flex space-x-2 py-1.5">
                        <Button class="h-8" variant="outline" :class="{ 'border-2 border-foreground': !props.data.theme.dark }" @click="props.data.theme.dark = false">
                            <SunIcon class="w-4 h-4 mr-2" />
                            <span class="text-xs">Light</span>
                        </Button>
                        <Button class="h-8" variant="outline" :class="{ 'border-2 border-foreground': props.data.theme.dark }" @click="props.data.theme.dark = true">
                            <MoonIcon class="w-4 h-4 mr-2" />
                            <span class="text-xs">Dark</span>
                        </Button>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick, watch } from "vue";
import { Paintbrush } from "lucide-vue-next";
import { Popover, PopoverContent, PopoverTrigger } from "../../../packages/shadcn/popover";
import { Button } from "../../../packages/shadcn/button";
import { Label } from "../../../packages/shadcn/label";
import { colors } from "../../../packages/shadcn";
import { SunIcon, MoonIcon, CheckIcon } from "@radix-icons/vue";

const props: any = defineProps<{
    data: any
}>();

watch(props, (theme: any) => {
    document.documentElement.classList.remove(
        ...props.data.theme.colors.map((color: any) => `theme-${color}`),
    );
    document.documentElement.classList.add(`theme-${props.data.store.theme}`);
});

watch(props, (radius: any) => {
    document.documentElement.style.setProperty("--radius", `${props.data.store.radius}rem`)
});

onBeforeMount(() => {});

onMounted(() => {
    document.documentElement.style.setProperty("--radius", `${props.data.store.radius}rem`);
    document.documentElement.classList.add(`theme-${props.data.store.theme}`);
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>