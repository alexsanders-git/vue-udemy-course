<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import { ref, watch } from 'vue';

interface IProps {
  isOpen: boolean;
}

interface IEmits {
  close: [];
}

const titleInput = ref<HTMLInputElement | null>(null);

const props = defineProps<IProps>();
defineEmits<IEmits>();

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    setTimeout(() => titleInput.value?.focus(), 0);
  }
});
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black/50"
    role="dialog"
    aria-label="true"
    @keydown.esc="$emit('close')"
  >
    <div class="w-full max-w-md p-5 bg-white rounded">
      <h2 class="mb-4 font-bold text-xl">Add New Card</h2>

      <input
        ref="titleInput"
        class="mb-4"
        type="text"
        placeholder="Card Title"
        aria-label="Card Title"
      />

      <textarea class="mb-4" placeholder="Card Description"
                aria-label="Card Description"></textarea>

      <div class="flex justify-end gap-2">
        <AppButton @click="$emit('close')">Save</AppButton>
        <AppButton variant="danger" @click="$emit('close')">Cancel</AppButton>
      </div>
    </div>
  </div>
</template>
