<template>
  <div>
    <h2>Products</h2>
    <div v-if="cartItems.length > 0">
      <nuxt-link to="/cart">cart</nuxt-link>
    </div>
    <div class="cart">
      <ul>
        <li v-for="(cartItem, key) in cartItems">
          <p>{{ cartItem.title }} - {{ cartItem.qty }}</p>
        </li>
      </ul>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(product, index) in getProducts">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="decQty(product)">-</button>
            <input type="text" v-model="product.qty">
            <button @click="incQty(product)">+</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {

  async asyncData({ $axios }) {
    const products = await $axios.$get('http://localhost:3004/products')
    return { products }
  },

  computed: {
    ...mapGetters({
      cartItems: 'products/cartItems',
    }),
    getProducts() {
      return this.products.map(product => {
        this.cartItems.forEach(cartItem => {
          if(product.id == cartItem.id) {
            product.qty = cartItem.qty
          }
        })
        return product
      })
    }
  },

  methods: {   
    ...mapMutations({
      incQty: 'products/incQty',
      decQty: 'products/decQty',
    })
  }
}
</script>