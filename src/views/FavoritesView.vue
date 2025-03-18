<script setup lang="ts">
import PostList from '@/components/PostList.vue';
import { usePostsStore } from '@/stores/posts.ts';

const store = usePostsStore();
</script>

<template>
  <h1>Favorite Posts</h1>

  <PostList :posts="store.favoritePosts" />
</template>
