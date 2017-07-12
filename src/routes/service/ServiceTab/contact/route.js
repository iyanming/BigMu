/**
 * Created by raoul on 17-7-11.
 */
module.exports = {
  path: 'contact',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'contact.chunk')
  }
}
