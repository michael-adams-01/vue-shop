import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../views/ProductsList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import UserCart from '../views/UserCart.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList, },
    { path: '/products/:id', component: ProductDetail, props: true },
    { path: '/cart', component: UserCart, },
    { path: '/:notFound(.*)', component: NotFound, },
  ],
})

export default router





// Lazy Loading
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue'),
// },
