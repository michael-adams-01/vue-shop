<template>
  <div>
    <base-card>
      <h1 class="text-center font-bold text-2xl">Featured Products</h1>
      <ul v-for="product in store.products">
        <base-card @click="loadProduct(product.id)">
          <img class="h-130 w-200 bg-blue-500 bg-cover bg-no-repeat bg-center"
            src="https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg" alt="">
          <li>Name: {{ product.name }}</li>
          <li class="font-bold">Image placeholder</li>
          <li>Description: {{ product.description }}</li>
          <li>Price: ${{ product.price }}</li>
          <li>Stock: {{ product.stock }}</li>
          <li>Rating: {{ product.rating }}</li>
          <router-link
            class="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">More
            details</router-link>
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
