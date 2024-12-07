<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";

interface Props extends PrimitiveProps {
    class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
    as: "div",
})
</script>

<template>
    <Primitive :as="as" :as-child="asChild" class="w-full text-center">
        <div class="grid gap-0 grid-cols-1 w-full h-full" :class="props.class">
            <div class="w-5 h-5 m-auto items-center">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        </div>
    </Primitive>
</template>
