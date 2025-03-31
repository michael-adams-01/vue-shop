<template>
  <base-card>
    <h1>{{ items }}</h1>
    <h1 class="text-center font-bold text-2xl">Your Cart</h1>
    <base-card>
      <ul v-for="item in items">
        <li>{{ item.name }}</li>
      </ul>
    </base-card>
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
    items() {
      console.log(this.store.userCart[0])
      return this.store.products.find(item => item.id === this.store.userCart[1]);
    }
  }
}
</script>
