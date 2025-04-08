<template>
  <div>
    <base-card>
      <h1 class="text-center font-bold text-2xl">{{ productData.name }}</h1>
      <p>{{ productData.description }}</p>
      <h3>${{ productData.price }}</h3>
      <h3>Items left in stock: {{ productData.stock }}</h3>
      <h3>Rating: {{ productData.rating }}</h3>
      <base-button @click="addToCart" class="mt-2 hover:scale-95">Add to cart</base-button>
    </base-card>
    <base-card v-if="showGoToCart">
      <h1 class="font-bold text-2xl">Ready to checkout?</h1>
      <router-link
        class="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        to="/">Continue Shopping</router-link>
      <router-link
        class="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        to="/cart">Checkout</router-link>
    </base-card>
  </div>
</template>

<script>
function generateId() {
  return Math.floor(Math.random() * 1000000);
}
import { useShopStore } from '../stores/shop.js';
export default {
  setup() {
    const store = useShopStore();
    return { store };
  },
  data() {
    return {
      showGoToCart: false,
    }
  },
  computed: {
    productData() {
      return this.store.products.find(product => product.id === this.$route.params.id);
    }
  },
  methods: {
    addToCart() {
      const newCartItem = {
        id: generateId(),
        name: this.productData.name,
        description: this.productData.description,
        price: this.productData.price,
        category: this.productData.category,
        stock: this.productData.stock,
        rating: this.productData.rating,
      }
      console.log(newCartItem)
      this.store.userCart.push(newCartItem);
      //this.store.userCart.push(this.productData);
      this.showGoToCart = true;
      console.log(this.store.userCart)
    }
  },
}
</script>
