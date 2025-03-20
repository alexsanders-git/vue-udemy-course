<script setup lang="ts">
import { reactive, ref } from 'vue';
import Draggable from 'vuedraggable';
import ModalDialog from '@/components/project-seven/ModalDialog.vue';
import type { IList } from '@/types.ts';
import { c } from 'vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P';

const lists = reactive<IList[]>([
  {
    id: 1,
    title: 'To Do',
    cards: [
      { id: 1, title: 'Task 1', description: 'Description for Task 1' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2' }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      { id: 3, title: 'Task 3', description: 'Description for Task 3' },
      { id: 4, title: 'Task 4', description: 'Description for Task 4' }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [{ id: 5, title: 'Task 5', description: 'Description for Task 5' }]
  }
]);

const isModalOpen = ref<boolean>(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <main class="pl-5 font-sans">
    <div class="flex gap-5 py-5 overflow-x-auto">
      <div
        v-for="list in lists"
        :key="list.id"
        class="flex flex-col min-w-[250px] p-3 bg-gray-100 rounded-lg"
      >
        <h2 class="mb-2 font-medium">{{ list.title }}</h2>

        <Draggable :list="list.cards" group="cards">
          <template #item="{element}">
            <div class="my-2 p-2 bg-white rounded shadow cursor-pointer">
              <span class="font-medium text-sm">{{ element.title }}</span>
              <p class="text-sm text-gray-400">{{ element.description }}</p>
            </div>
          </template>
        </Draggable>

        <button
          class="w-full mt-2 p-2 bg-transparent hover:bg-white text-gray-500 font-medium text-sm text-left rounded cursor-pointer transition"
          @click="openModal"
        >
          + Add Card
        </button>
      </div>
    </div>

    <ModalDialog :is-open="isModalOpen" @close="closeModal" />
  </main>
</template>

<style scoped>

</style>
