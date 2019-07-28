import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
      key: 'b2bautoparts',
      // paths: [...]
      // ...
  })(store)
}
 