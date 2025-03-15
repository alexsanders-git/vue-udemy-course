<script setup lang="ts">
import type { ITab } from '@/types.ts';
import { computed } from 'vue';

interface IProps {
  currentTab: string;
  tab: ITab;
}

interface IEmits {
  click: [];
}

const isActive = computed(() => props.currentTab === props.tab.key);

const props = defineProps<IProps>();
defineEmits<IEmits>();
</script>

<template>
  <button
    :class="{
      'p-4 border-b-2 cursor-pointer': true,
      'border-transparent': !isActive,
      'border-violet-600 text-violet-600': isActive,
    }"
    @click="$emit('click')"
  >
    {{ tab.label }}
  </button>
</template>

<style scoped></style>
