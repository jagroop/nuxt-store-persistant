<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/products">Products</nuxt-link>
    <nuxt-link to="/cart">cart</nuxt-link>
      <nuxt/>
  </div>
</template>

<style>
  table {
  border-collapse: collapse;
}
 th {
  background: #ccc;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

tr:nth-child(even) {
  background: #efefef;
}

tr:hover {
  background: #d1d1d1;
}
</style>