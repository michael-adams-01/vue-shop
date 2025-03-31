<template>
  <h1>{{ store.userCart }}</h1>
  <base-card>
    <h1 class="text-center font-bold text-2xl">{{ productData.name }}</h1>
    <p>{{ productData.description }}</p>
    <h3>${{ productData.price }}</h3>
    <h3>Items left in stock: {{ productData.stock }}</h3>
    <h3>Rating: {{ productData.rating }}</h3>
    <base-button @click="addToCart(productData.id)" class="mt-2">Add to cart</base-button>
  </base-card>
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
  methods: {
    addToCart(itm) {
      this.store.userCart.push(itm);
    }
  }
}
</script>
