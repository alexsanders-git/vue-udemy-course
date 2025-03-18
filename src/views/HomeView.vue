<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePostsStore } from '@/stores/posts.ts';
import PostList from '@/components/PostList.vue';

const store = usePostsStore();

const searchQuery = ref<string>('');

const searchPosts = computed(() => store.searchPosts(searchQuery.value));
</script>

<template>
  <main>
    <h1>Posts</h1>

    <div>
      <input type="text" v-model="searchQuery" placeholder="Searh..." />
    </div>

    <PostList :posts="searchPosts" />
  </main>
</template>
