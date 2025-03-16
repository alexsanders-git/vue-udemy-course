<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/project-four/AppCard.vue';

interface IProps {
  title: string;
  date: string;
  description: string;
}

interface IEmits {
  register: [];
}

defineProps<IProps>();
defineEmits<IEmits>();
</script>

<template>
  <AppCard>
    <template #header>{{ title }}</template>

    {{ date }}

    <template #footer>
      <p>{{ description }}</p>

      <div class="flex justify-end mt-4">
        <AppButton class="text-sm" @click="$emit('register')">Register</AppButton>
      </div>
    </template>
  </AppCard>
</template>
