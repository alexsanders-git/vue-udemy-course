<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';

interface IProps {
  retry?: () => void;
}

defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col items-center space-y-4 p-4 border border-gray-200 bg-white rounded-md">
    <span class="text-lg text-red-500"><slot /></span>

    <AppButton v-if="retry" class="text-sm" variant="danger" @click="retry">Retry now</AppButton>
  </div>
</template>
