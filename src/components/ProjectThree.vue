<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

interface ITask {
  id: number;
  description: string;
  priority: Priority;
  isDone: boolean;
}

const tasks = ref<ITask[]>(JSON.parse(localStorage.getItem('tasks') ?? '[]'));
const newTask = ref<string>('');
const newTaskPriority = ref<Priority>(Priority.Low);
const newTaskInput = ref<HTMLInputElement | null>(null);
const searchQuery = ref<string>('');

const addTask = () => {
  if (newTask.value === '') return;

  tasks.value.unshift({
    id: Date.now(),
    description: newTask.value,
    priority: newTaskPriority.value,
    isDone: false,
  });

  newTask.value = '';
  newTaskPriority.value = Priority.Low;
};

const searchTask = computed(() =>
  tasks.value.filter((t) => t.description.toLowerCase().includes(searchQuery.value.toLowerCase())),
);

const removeTasks = (id: number) => {
  tasks.value = tasks.value.filter((t) => t.id !== id);
};

onMounted(() => {
  newTaskInput.value?.focus();
});

watch(
  tasks,
  () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  },
  { deep: true },
);
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-4xl p-5 text-center shadow-lg">
        <form class="flex gap-2 mb-4" @submit.prevent="addTask">
          <input
            class="grow p-2 border border-slate-300 focus:border-slate-400 outline-none rounded-md"
            placeholder="Add new task"
            ref="newTaskInput"
            v-model="newTask"
          />

          <select
            class="grow p-2 border border-slate-300 focus:border-slate-400 outline-none rounded-md"
            v-model="newTaskPriority"
          >
            <option disabled value="">Select priority</option>
            <option :value="Priority.High">High</option>
            <option :value="Priority.Medium">Medium</option>
            <option :value="Priority.Low">Low</option>
          </select>

          <button
            class="w-fit py-2 px-6 font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-md cursor-pointer"
            type="submit"
          >
            Add task
          </button>
        </form>

        <div class="flex mb-4">
          <input
            class="grow p-2 border border-slate-300 focus:border-slate-400 outline-none rounded-md"
            placeholder="Search task..."
            v-model="searchQuery"
          />
        </div>

        <div class="space-y-3" v-if="tasks.length">
          <h2 class="text-2xl">Your Tasks</h2>

          <div
            class="flex items-center justify-between py-2 px-4 bg-violet-50 rounded border-l-5"
            :class="{
              'border-red-400': task.priority === 'High',
              'border-orange-400': task.priority === 'Medium',
              'border-green-500': task.priority === 'Low',
            }"
            v-for="task in searchTask"
            :key="task.id"
          >
            <div class="space-x-2">
              <input type="checkbox" v-model="task.isDone" />

              <span class="text-lg" :class="{ 'line-through': task.isDone }">{{
                task.description
              }}</span>
            </div>

            <button class="cursor-pointer" @click="removeTasks(task.id)">❌</button>
          </div>
        </div>

        <p text-lg text-gray-500 v-else>
          No tasks found. Try changing the filter or add some tasks!
        </p>
      </div>
    </div>
  </div>
</template>
