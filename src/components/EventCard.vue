<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/AppCard.vue';

interface IProps {
  title: string;
  date: string;
  description: string;
}

defineProps<IProps>();
defineEmits(['register']);
</script>

<template>
  <AppCard>
    <template #header>{{ title }}</template>

    {{ date }}

    <template #footer>
      <p>{{ description }}</p>

      <div class="flex justify-end mt-4">
        <AppButton class="text-sm" @click="$emit('register')"> Register </AppButton>
      </div>
    </template>
  </AppCard>
</template>
