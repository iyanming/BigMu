module.exports = {
  path: 'about',
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
