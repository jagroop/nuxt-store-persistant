# nuxt-store-persistant

## Packages required

- [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)
- [nuxt-axios](https://axios.nuxtjs.org/)

## Configuration

**plugins/localStorage.js**

```js
import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
      key: 'applicationName',
      // paths: [...]
      // ...
  })(store)
}
 
```

**nuxt.config.js**
```js
export default {
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],

  modules: [
    '@nuxtjs/axios',
  ],
}
```