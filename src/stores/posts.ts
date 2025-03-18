import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export interface IPost {
  id: string;
  name: string;
  description: string;
}

type NewPost = Omit<IPost, 'id'>

export const usePostsStore = defineStore('post', () => {
  const posts = ref<IPost[]>([]);
  const favoritesIds = ref<string[]>([]);

  const addPost = (post: NewPost) => {
    const newPost = {
      id: Date.now().toString(),
      ...post
    };

    posts.value.push(newPost);

    return newPost;
  };

  const editPost = (editedPost: IPost) => {
    const index = posts.value.findIndex(p => p.id === editedPost.id);

    if (index !== -1) {
      posts.value[index] = editedPost;
    }
  };

  const getPostById = (id: string) => posts.value.find(p => p.id === id);

  const searchPosts = (searchQuery: string) => posts.value.filter(p => p.name.toLowerCase()
    .includes(searchQuery.toLowerCase()));

  const isFavorite = (id: string) => favoritesIds.value.includes(id);
  
  const toggleFavorite = (id: string) => {
    if (isFavorite(id)) {
      favoritesIds.value = favoritesIds.value.filter(favId => favId !== id);
    } else {
      favoritesIds.value.push(id);
    }
  };

  const favoritePosts = computed(() => posts.value.filter(
    p => favoritesIds.value.includes(p.id)
  ));

  return {
    posts,
    addPost,
    editPost,
    getPostById,
    searchPosts,
    isFavorite,
    favoritesIds,
    toggleFavorite,
    favoritePosts
  };
});
