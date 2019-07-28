<template>
  <div>
    <h2>Cart Checkout</h2>
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
        <tr v-for="(product, index) in cartItems">
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

  computed: {
    ...mapGetters({
      cartItems: 'products/cartItems',
    }),
  },

  methods: {   
    ...mapMutations({
      incQty: 'products/incQty',
      decQty: 'products/decQty',
    })
  }
}
</script>