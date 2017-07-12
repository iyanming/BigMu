/**
 * Created by raoul on 17-7-11.
 */
module.exports = {
  path: 'solution',
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'solution.chunk')
  }
}
