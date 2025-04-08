import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    userCart: [],
    subtotal: 599,
    filteredItems: [],
    products: [
      {
        "id": "1",
        "name": "Italian Leather Briefcase",
        "description": "Handcrafted full-grain leather briefcase with brass hardware and a timeless design.",
        "price": 299.99,
        "category": ["accessories", "luxury"],
        "stock": 10,
        "rating": 4.9
      },
      {
        "id": "2",
        "name": "Crystal Whiskey Decanter Set",
        "description": "Elegant lead-free crystal decanter with matching glasses for the discerning gentleman.",
        "price": 129.99,
        "category": ["home", "barware"],
        "stock": 20,
        "rating": 4.8
      },
      {
        "id": "3",
        "name": "Mahogany Writing Desk",
        "description": "Classic solid mahogany desk with leather inlay and brass detailing for a refined workspace.",
        "price": 799.99,
        "category": ["furniture", "office"],
        "stock": 5,
        "rating": 4.9
      },
      {
        "id": "4",
        "name": "Swiss Automatic Dress Watch",
        "description": "Exquisite Swiss-made automatic watch with a sapphire crystal and alligator leather strap.",
        "price": 980.99,
        "category": ["accessories", "luxury"],
        "stock": 3,
        "rating": 5.0
      },
      {
        "id": "5",
        "name": "Fine Merino Wool Scarf",
        "description": "Soft and luxurious merino wool scarf crafted in Italy for a refined winter look.",
        "price": 89.99,
        "category": ["fashion", "accessories"],
        "stock": 15,
        "rating": 4.7
      },
      {
        "id": "6",
        "name": "Handmade Leather Dress Shoes",
        "description": "Goodyear-welted leather dress shoes made from premium calfskin for timeless elegance.",
        "price": 399.99,
        "category": ["fashion", "footwear"],
        "stock": 8,
        "rating": 4.9
      },
      {
        "id": "7",
        "name": "Fountain Pen with 18K Gold Nib",
        "description": "A finely crafted fountain pen with an 18K gold nib, ideal for those who appreciate fine writing instruments.",
        "price": 249.99,
        "category": ["office", "luxury"],
        "stock": 12,
        "rating": 4.8
      }
    ]

  }),
  actions: {
    removeFromCart(id) {
      console.log('removeFromCart ran!', id)
      this.userCart = this.userCart.filter(item => item.id !== id);
    }
  }
})
