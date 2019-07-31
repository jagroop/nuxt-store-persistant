export default {
  incQty (state, product) {
    product.qty++
    var index = state.cartItems.findIndex(cartItem => cartItem.id == product.id)
    if(index === -1) {
      state.cartItems.push(product)      
    } else {
      state.cartItems[index] = product
    }
  },
  
  decQty (state, product) {
    if(product.qty > 0) {
      product.qty--
    }
    var index = state.cartItems.findIndex(cartItem => cartItem.id == product.id)
    state.cartItems[index] = product
    if(product.qty <= 0) {
      state.cartItems.splice(index, 1)
    }
  },

  setCustomer(state, customer) {
    state.customer = customer
  }
}
