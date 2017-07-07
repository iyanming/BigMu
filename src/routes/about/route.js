module.exports = {
  path: 'about',
  childRoutes: [
    require('./info/route'),
  ],
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'about.chunk')
  }
}
