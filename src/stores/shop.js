import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    message: 'Hello from Pinia',
  }),
  actions: {
    testAction() {
      console.log('testAction ran!')
    }
  }
})
