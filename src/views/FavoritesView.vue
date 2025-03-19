<script setup lang="ts">
import PostList from '@/components/PostList.vue';
import { usePostsStore } from '@/stores/posts.ts';

const store = usePostsStore();
</script>

<template>
  <h1 class="mb-4 text-2xl text-indigo-600 font-bold">Favorite Posts</h1>

  <PostList :posts="store.favoritePosts" />
</template>
