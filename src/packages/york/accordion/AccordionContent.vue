<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { type HTMLAttributes, computed } from "vue";
import { Merge } from "../utils.ts";

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="Merge('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
