/**
 * Created by raoul on 17-7-11.
 */
module.exports = {
  path: 'product',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'product.chunk')
  }
}