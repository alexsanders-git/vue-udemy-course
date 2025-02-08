<script setup lang="ts">
import { computed, ref } from 'vue';

const questions: string[] = ['How match is 2+2', 'How match is 3*5+1', 'What is the rest from 3/1'];

const answers: string[] = ['4', '16', '1'];

const score = ref<number>(0);
const current = ref<number>(0);
const answer = ref<string>('');

const question = computed<string>(() => questions[current.value]);
const rightAnswer = computed<string>(() => answers[current.value]);
const isDone = computed<boolean>(() => questions.length === current.value);

const check = (): void => {
  if (answer.value === rightAnswer.value) {
    score.value++;
  }

  answer.value = '';
  current.value++;

  if (isDone.value) {
    clearInterval(interval);
  }
};

const reset = (): void => {
  score.value = 0;
  current.value = 0;
  answer.value = '';

  clearInterval(interval);
  interval = setInterval(check, 4000);
};

const getEmoji = (score: number): string => {
  switch (score) {
    case 0:
    case 1:
      return '😒';
    case 2:
      return '😀';
    case 3:
      return '😎';
    default:
      return '';
  }
};

let interval: number = setInterval(check, 4000);
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-xl p-5 text-center shadow-lg">
        <h1 class="text-4xl mb-4">
          {{ isDone ? `Your score: ${score} ${getEmoji(score)}` : 'Next question' }}
        </h1>

        <p class="text-3xl mb-4" v-if="question">
          {{ question }}
        </p>

        <div class="flex flex-col gap-4">
          <input
            class="p-2 border border-slate-300 focus:border-slate-400 outline-none rounded-md"
            v-model="answer"
          />

          <button
            class="w-fit mx-auto py-2 px-6 font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-md cursor-pointer"
            @click="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
