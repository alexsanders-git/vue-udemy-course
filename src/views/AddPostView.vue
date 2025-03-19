<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePostsStore } from '@/stores/posts.ts';

const router = useRouter();
const store = usePostsStore();

const name = ref<string>('');
const description = ref<string>('');

const addPost = () => {
  const post = store.addPost({
    name: name.value,
    description: description.value
  });

  router.push({
    name: 'post',
    params: {
      id: post.id
    }
  });
};
</script>

<template>
  <h1 class="mb-4 text-2xl text-indigo-600 font-bold">Add post</h1>

  <form class="space-y-2" @submit.prevent="addPost">
    <div>
      <input
        v-model="name"
        class="w-full mb-4 p-2 bg-white border border-indigo-200 focus:border-indigo-400 focus:outline-none rounded"
        type="text"
        placeholder="Post name"
        required
      >
    </div>

    <div>
      <textarea
        v-model="description"
        class="w-full mb-4 p-2 bg-white border border-indigo-200 focus:border-indigo-400 focus:outline-none rounded"
        placeholder="Post description"
      ></textarea>
    </div>

    <button
      class="w-fit py-2 px-6 font-medium rounded-md cursor-pointer text-white bg-violet-500 hover:bg-violet-600"
      type="submit"
    >
      Save
    </button>
  </form>
</template>
