<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import AppButton from '@/components/AppButton.vue';

interface IProps {
  title: string;
  status: string;
}

defineProps<IProps>();
defineEmits(['cancel']);
</script>

<template>
  <AppCard>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div>{{ title }}</div>
        <span>{{ status }}</span>
      </div>
      <AppButton class="text-sm" variant="danger" @click="$emit('cancel')">Cancel</AppButton>
    </div>
  </AppCard>
</template>
