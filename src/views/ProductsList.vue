<template>
  <div>
    <base-card>
      <h1 class="text-center font-bold text-2xl">Featured Products</h1>
      <ul v-for="product in store.products">
        <base-card @click="loadProduct(product.id)">
          <li>Name: {{ product.name }}</li>
          <li class="font-bold">Image placeholder</li>
          <li>Description: {{ product.description }}</li>
          <li>Price: ${{ product.price }}</li>
          <li>Stock: {{ product.stock }}</li>
          <li>Rating: {{ product.rating }}</li>
        </base-card>
      </ul>
    </base-card>
  </div>
</template>

<script>
import { useShopStore } from '../stores/shop.js';
export default {
  setup() {
    const store = useShopStore();
    return { store }
  },
  methods: {
    loadProduct(id) {
      // $router.push(`/products/${id}`)
      this.$router.push(`/products/${id}`);
    }
  }
}
</script>
