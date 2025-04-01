<template>
  <h1>Shopping Cart</h1>
  <h3>{{ store.userCart }}</h3>
</template>

<script>
import { useShopStore } from '../stores/shop.js';
export default {
  setup() {
    const store = useShopStore();
    return { store };
  }
}
</script>
