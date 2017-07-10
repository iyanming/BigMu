/**
 * Created by Pororo on 17/7/7.
 */
module.exports = {
  path: 'classesCase',
  getIndexRoute (nextState, cb) {
    require.ensure([], require => {
      cb(null, {component: require('./lastedCase/index')})
    }, 'lastedCase.chunk')
  },
  childRoutes: [
    require('./hotelCase/route'),
    require('./lastedCase/route'),
    require('./workingCase/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'classesCase.chunk')
  }
}
