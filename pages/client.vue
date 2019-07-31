<template>
  <div>
    <h2>Customers</h2>   
    <select v-model="getCustomer">
      <option v-for="customer in customers" v-bind:value="customer.id" v-text="customer.name"></option>
    </select>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {

  async asyncData({ $axios }) {
    const customers = await $axios.$get('http://localhost:3004/customers')
    return { customers }
  },
  computed: {
    getCustomer: {
      get() {
        var customer = this.$store.state.products.customer
        return customer
      },
      set(e) {
        // console.log(e)
        this.$store.commit('products/setCustomer', e)
      }
    }
  }
}
</script>