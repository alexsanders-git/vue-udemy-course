import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import AddPostView from '@/views/AddPostView.vue';
import PostView from '@/views/PostView.vue';
import EditPostView from '@/views/EditPostView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: ['/home']
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/add-post',
      name: 'add-post',
      component: AddPostView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView,
      alias: '/article/:id'
    },
    {
      path: '/post/:id/edit',
      name: 'edit-post',
      component: EditPostView,
      alias: '/article/:id/edit'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
});

export default router;
