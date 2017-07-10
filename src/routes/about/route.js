module.exports = {
  path: 'about',
  getIndexRoute (nextState, cb) {
    require.ensure([], require => {
      cb(null, {component: require('./introduction/index')})
    }, 'introduction.chunk')
  },
  childRoutes: [
    require('./classesCase/route'),
    require('./honor/route'),
    require('./introduction/route'),
    require('./news/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'about.chunk')
  }
}
