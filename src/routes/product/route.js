module.exports = {
  path: 'product',
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'product.chunk')
  }
}
