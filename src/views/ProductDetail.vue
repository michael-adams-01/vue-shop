<template>
  <h1>Product Detail</h1>
  <h3>{{ $route.params.id }}</h3>
  <h3>{{ productData }}</h3>
</template>

<script>
import { useShopStore } from '../stores/shop.js';
export default {
  setup() {
    const store = useShopStore();
    return { store };
  },
  computed: {
    productData() {
      return this.store.products.find(product => product.id === this.$route.params.id);
    }
  },
}
</script>
