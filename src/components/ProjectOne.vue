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
  current.value = 0;
};

const interval: number = setInterval(check, 5000);
</script>

<template>
  <div class="wrapper">
    <div>
      {{ isDone ? `Your score: ${score}` : 'Next question' }}
    </div>
    <div v-if="question">
      {{ question }}
    </div>
    <div>
      <input v-model="answer" />
    </div>
    <div>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>
