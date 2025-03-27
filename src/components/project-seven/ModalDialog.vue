<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import AppButton from '@/components/AppButton.vue';
import type { ICard } from '@/types.ts';

interface IProps {
  isOpen: boolean;
  card: ICard | null;
  mode: 'add' | 'edit';
}

interface IEmits {
  close: [];
  save: [card: ICard];
}

const titleInput = ref<HTMLInputElement | null>(null);
const modalElement = ref<HTMLDivElement | null>(null);
const localCard = ref<ICard>({
  id: 0, title: '', description: ''
});

const { activate, deactivate } = useFocusTrap(modalElement);

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

watch(() => props.card, (newCard) => {
  if (newCard) {
    localCard.value = { ...newCard };
  } else {
    localCard.value = { id: 0, title: '', description: '' };
  }
}, { immediate: true });

watch(() => props.isOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick();
    activate();
    titleInput.value?.focus();
  } else {
    deactivate();
  }
});
</script>

<template>
  <div
    v-if="isOpen"
    ref="modalElement"
    class="fixed inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
    role="dialog"
    aria-label="true"
    @click.self="emit('close')"
    @keydown.esc="emit('close')"
  >
    <div class="w-full max-w-md p-5 bg-white rounded">
      <h2 class="mb-4 font-bold text-xl">
        {{ mode === 'add' ? 'Add New Card' : 'Edit Card' }}
      </h2>

      <input
        v-model="localCard.title"
        ref="titleInput"
        class="mb-4"
        type="text"
        placeholder="Card Title"
        aria-label="Card Title"
      />

      <textarea
        v-model="localCard.description"
        class="mb-4"
        placeholder="Card Description"
        aria-label="Card Description"
      ></textarea>

      <div class="flex justify-end gap-2">
        <AppButton @click="emit('save', localCard)">
          {{ mode === 'add' ? 'Add' : 'Save' }}
        </AppButton>
        <AppButton variant="danger" @click="emit('close')">Cancel</AppButton>
      </div>
    </div>
  </div>
</template>
