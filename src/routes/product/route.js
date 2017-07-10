module.exports = {
  path: 'product',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'product.chunk')
  },
  childRoutes: [
    {
      path: ':id',
      getComponents (nextState, callback) {
        require.ensure([], () => {
          callback(null, require('./Detail'))
        }, 'product.sub.chunk')
      }
    }
  ]
}
