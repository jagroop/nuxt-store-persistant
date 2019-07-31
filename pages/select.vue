<template>
  <div>
    <code>
      {{ value }}
    </code>
    <multiselect :multiple="true" :close-on-select="false" v-model="value" :options="options"></multiselect>
  </div>
</template>

<script>

  export default {   
    data () {
      return {
        value: [],
        options: ['list', 'of', 'options']
      }
    },
  }
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>