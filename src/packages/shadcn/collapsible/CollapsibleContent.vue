<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue'

const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent v-bind="props" class="overflow-hidden transition-all data-[state=closed]:collapsible-up data-[state=open]:collapsible-down">
    <slot />
  </CollapsibleContent>
</template>
