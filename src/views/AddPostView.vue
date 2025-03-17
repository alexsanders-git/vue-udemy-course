<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const addPost = () => {
  router.push({
    name: 'post',
    params: {
      id: 1,
    },
  });
};
</script>

<template>
  <div>Add post</div>
  <form @submit.prevent="addPost">
    <button type="submit">Save</button>
  </form>
</template>
