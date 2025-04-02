<template>
  <div>
    <h1>Cart items {{ getCartItems }}</h1>
    <h1 class="text-center text-2xl font-bold">Shopping Cart</h1>
    <base-card>
      <ul v-for="item in store.userCart">
        <base-card>
          <li>{{ item }}</li>
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
    return { store };
  },
  computed: {
    getCartItems() {
      //const testArray = ['1', '2']
      //const cartItems = this.store.userCart.filter(item => this.store.userCart.includes(item.id));
      const cartItems = this.store.products.filter(item => item.id === this.store.cartItems);
      return cartItems
    }
  }
}
</script>
