<template>
  <div class="border-b-1 border-gray-400 w-full p-3 flex justify-between">
    <router-link to="/" class="text-green-600 font-bold text-4xl">VueShop</router-link>
    <router-link to="/cart" class="text-2xl">
      <img class="w-10 inline" src="/cart.svg" alt="">
      {{ store.cartItemsCount }}</router-link>
  </div>
</template>


<script>
import { useShopStore } from '@/stores/shop.js';
export default {
  setup() {
    const store = useShopStore();
    return { store };
  }
}
</script>
