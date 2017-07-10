/**
 * Created by Pororo on 17/7/8.
 */
module.exports = {
  path: 'hotelCase',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'hotelCase.chunk')
  }
}
