<script setup lang="ts">
import { LoaderCircle, Check } from 'lucide-vue-next';
import AppCard from '@/components/project-four/AppCard.vue';
import AppButton from '@/components/AppButton.vue';
import { computed } from 'vue';

interface IProps {
  title: string;
  status: 'pending' | 'confirmed';
}

interface IEmits {
  cancel: [];
}

const props = defineProps<IProps>();

const pending = computed(() => props.status === 'pending');
const icon = computed(() => (pending.value ? LoaderCircle : Check));

defineEmits<IEmits>();
</script>

<template>
  <AppCard>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div>{{ title }}</div>
        <div><component :is="icon" :class="{ 'animate-spin': pending }" /></div>
      </div>
      <AppButton class="text-sm" variant="danger" @click="$emit('cancel')">Cancel</AppButton>
    </div>
  </AppCard>
</template>
