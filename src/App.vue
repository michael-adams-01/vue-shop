<!-- J.M.J -->
<template>
  <nav-bar></nav-bar>
  <router-view v-slot="slotProps">
    <transition name="fade-page" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import { useShopStore } from './stores/shop.js';
export default {
  setup() {
    const store = useShopStore();
    return { store }
  },
}
</script>

<style>
.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}

.fade-page-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-page-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-page-enter-t,
.fade-page-lave-to {
  opacity: 1;
}
</style>
