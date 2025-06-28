import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    userCart: [],
    filteredItems: [],
    products: [
      {
        "id": "1",
        "name": "Leather Briefcase",
        "description": "Handcrafted full-grain leather briefcase with brass hardware and a timeless design.",
        "price": 299.99,
        "category": ["accessories", "luxury"],
        "stock": 10,
        "rating": 4.9,
        "image": '/images/briefcase.jpg'
      },
      {
        "id": "2",
        "name": "Swiss Automatic Dress Watch",
        "description": "Exquisite Swiss-made automatic watch with a sapphire crystal and stainless steel strap.",
        "price": 980.99,
        "category": ["accessories", "luxury"],
        "stock": 3,
        "rating": 5.0,
        "image": '/images/watch.jpg',
      },
      {
        "id": "3",
        "name": "Handmade Leather Dress Shoes",
        "description": "Goodyear-welted leather dress shoes made from premium calfskin for timeless elegance.",
        "price": 399.99,
        "category": ["fashion", "footwear"],
        "stock": 8,
        "rating": 4.9,
        "image": '/images/shoes.jpg',
      },
      {
        "id": "4",
        "name": "Fountain Pen with 18K Gold Nib",
        "description": "A finely crafted fountain pen with an 18K gold nib, ideal for those who appreciate fine writing instruments.",
        "price": 249.99,
        "category": ["office", "luxury"],
        "stock": 12,
        "rating": 4.8,
        "image": '/images/pen.jpg',
      },
      {
        "id": "5",
        "name": "Aether 5G Smartphone",
        "description": "The Aether 5G Smartphone combines cutting-edge technology with sleek design. Featuring a 6.8-inch OLED display, ultra-fast 5G connectivity, a powerful octa-core processor, and a 108MP camera, this phone ensures a premium experience for both work and play. Equipped with a 5000mAh battery for all-day use and a robust AI-driven interface for seamless multitasking, it's designed for those who demand performance and style.",
        "price": 149.99,
        "category": ["electronics", "accessories"],
        "stock": 25,
        "rating": 4.7,
        "image": "/images/phone.jpg"
      },
      {
        "id": "6",
        "name": "Titanium Frame Sunglasses",
        "description": "These premium sunglasses feature lightweight titanium frames for ultimate comfort and durability. Equipped with polarized lenses that offer 100% UV protection, they provide superior clarity and reduce glare for a more enjoyable outdoor experience. The modern design, with sleek contours and a matte finish, adds a touch of sophistication to any outfit, making them perfect for both casual and formal occasions.",
        "price": 229.99,
        "category": ["fashion", "accessories"],
        "stock": 20,
        "rating": 4.9,
        "image": "/images/sunglasses.jpg"
      },
      {
        "id": "7",
        "name": "Classic Analog Alarm Clock",
        "description": "A timeless analog alarm clock with a vintage design, featuring a traditional bell mechanism for a loud, attention-grabbing wake-up call. The easy-to-read face is complemented by bold, black numerals and luminous hands, ensuring visibility even in the dark. Its durable metal casing and sturdy base make it a reliable choice for your bedside table, while its classic charm adds a nostalgic touch to any room.",
        "price": 34.99,
        "category": ["home", "accessories"],
        "stock": 40,
        "rating": 4.8,
        "image": "/images/alarm_clock.jpg"
      }

    ]

  }),
  actions: {
    removeFromCart(id) {
      this.userCart = this.userCart.filter(item => item.id !== id);
      this.saveCart()
    },
    addToCart(newItem) {
      this.userCart.push(newItem);
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('savedCart', JSON.stringify(this.userCart));
      console.log(this.userCart)
    },
    getSavedCart() {
      const savedCart = localStorage.getItem('savedCart')
      const savedCartParsed = JSON.parse(savedCart)
      console.log(savedCartParsed)

      if (!!savedCartParsed) {
        this.userCart = savedCartParsed
      }
    }
  },
  getters: {
    getSubtotal() {
      //const prices = this.store.userCart.map(item => item.price);
      const prices = this.userCart.map(item => item.price)
      // const sum = prices.reduce((acc, cur) => acc + cur, 0); //Find out why this code works.
      const sum = prices.reduce((acc, cur) => acc + cur, 0);
      const roundedSum = Math.round(sum)
      return roundedSum
    },
    cartItemsCount() {
      return this.userCart.length
    },
  }
})
