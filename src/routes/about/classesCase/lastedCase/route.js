/**
 * Created by Pororo on 17/7/8.
 */
module.exports = {
  path: 'lastedCase',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'lastedCase.chunk')
  }
}
