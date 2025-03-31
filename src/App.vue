<!-- J.M.J -->
<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
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
