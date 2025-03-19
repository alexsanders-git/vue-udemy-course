<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePostsStore } from '@/stores/posts.ts';
import PostList from '@/components/PostList.vue';

const store = usePostsStore();

const searchQuery = ref<string>('');

const searchPosts = computed(() => store.searchPosts(searchQuery.value));
</script>

<template>
  <div>
    <h1 class="mb-4 text-2xl text-indigo-600 font-bold">Posts</h1>

    <div>
      <input
        class="w-full mb-4 p-2 bg-white border border-indigo-200 focus:border-indigo-400 focus:outline-none rounded"
        type="text"
        v-model="searchQuery"
        placeholder="Search..." />
    </div>

    <PostList :posts="searchPosts" />
  </div>
</template>
