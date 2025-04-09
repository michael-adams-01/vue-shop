<template>
  <button @click="debugMethod">DEBUG</button>
  <div>
    <div v-if="showCartItems">
      <h1 class="text-center text-2xl font-bold">Shopping Cart</h1>
      <base-card>
        <ul v-for="item in store.userCart">
          <base-card class="">
            <li>{{ item.name }}</li>
            <li>${{ item.price }}</li>
            <li>Qty: 1</li> <!-- Placeholder -->
            <base-button @click="removeFromCart(item.id)" class="bg-red-500">Remove from cart</base-button>
          </base-card>
        </ul>
      </base-card>
      <base-card>
        <h1 class="text-center text-xl">Subtotal: ${{ store.getSubtotal }}</h1>
      </base-card>
    </div>
    <div v-else>
      <base-card>
        <h1 class="text-center font-bold text-2xl">Your cart is empty.</h1>
      </base-card>
    </div>
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
      return this.store.userCart;
    },
    showCartItems() {
      if (this.store.userCart <= 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    removeFromCart(id) {
      this.store.removeFromCart(id)
    },
    debugMethod() {
    }
  }
}
</script>
