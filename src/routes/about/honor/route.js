/**
 * Created by Pororo on 17/7/7.
 */
module.exports = {
  path: 'honor',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'honor.chunk')
  }
}
